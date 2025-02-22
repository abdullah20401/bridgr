import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logoWhite.png";

import { client } from "../client.js";

function Login() {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem(
      "user",
      JSON.stringify(response.credential)
    );
    var decodedHeader = jwtDecode(response.credential);
    console.log(decodedHeader);

    const { name, sub, picture } = decodedHeader;

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            >
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={responseGoogle}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
