const AppNavBar = () => {
  
  return (
    <>
      <div className="navbar bg-primary text-white">
        <div className="flex justify-between w-full">
          <button className="btn btn-ghost text-xl">NestHub</button>
          <div>
            <a href="/auth/login" className="btn btn-ghost text-xl">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppNavBar;
