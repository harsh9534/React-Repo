import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React from "react";

const GoogleButton = () => {
  return (
    <div>
      <GoogleLogin
        async
        onSuccess={(credentialResponse) => {
          const decodedCredential = jwtDecode(credentialResponse.credential);
          console.log(decodedCredential.name);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap={true}
        ux_mode="popup" // Set uxMode to popup
        popupHeight={600} // Optional: Specify the height of the popup window
        popupWidth={500} // Optional: Specify the width of the popup window
      />
    </div>
  );
};

export default GoogleButton;
