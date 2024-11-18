import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthInterstitial = () => {
  const navigate = useNavigate();
  const profile = Cookies.get("profile");
  console.log("Social profile ", profile);
  useEffect(() => {
    navigate("/");
  }, [profile]);
  return (
    <>
      <div>
        <div>AuthInterstitial</div>
      </div>
    </>
  );
};

export default AuthInterstitial;
