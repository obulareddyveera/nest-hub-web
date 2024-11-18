import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { Link } from "react-router-dom";

export const LoginAuthPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card w-full md:w-1/2">
          <figure>
            <Link to="/">
              <img src="/src/assets/walls/hero-wall.png" alt="NestHub" />
            </Link>
          </figure>
          <div className="card-body">
            <div className="flex flex-col align-middle gap-2">
              <a
                href="http://localhost:3000/auth/facebook"
                className="facebook-btn"
              >
                <IoLogoFacebook
                  style={{ width: "20px", height: "20px", paddingRight: "2px" }}
                />
                Login with Facebook
              </a>
              <a
                href="http://localhost:3000/auth/google"
                className="google-btn"
              >
                <IoLogoGoogle
                  style={{ width: "20px", height: "20px", paddingRight: "2px" }}
                />
                Sign in with Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
