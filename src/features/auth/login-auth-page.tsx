import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { Link } from "react-router-dom";

export const LoginAuthPage = () => {
  const appAPIURL = window.__ENV.REACT_APP_API_URL;
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
              <a href={`${appAPIURL}/auth/facebook`} className="facebook-btn">
                <IoLogoFacebook
                  style={{ width: "20px", height: "20px", paddingRight: "2px" }}
                />
                Login with Facebook
              </a>
              <a href={`${appAPIURL}/auth/google`} className="google-btn">
                <IoLogoGoogle
                  style={{ width: "20px", height: "20px", paddingRight: "2px" }}
                />
                Sign in with Google
              </a>
              {window.__ENV.REACT_APP_ENV && (
                <a href={`${appAPIURL}/auth/dev`} className="btn">
                  <IoLogoGoogle
                    style={{
                      width: "20px",
                      height: "20px",
                      paddingRight: "2px",
                    }}
                  />
                  Developer
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
