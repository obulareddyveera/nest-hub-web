const NestHubHomePage = () => {
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('../../assets/walls/hero-wall.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Explore the World of Design
            </h1>
            <p className="mt-4 text-lg">
              Your journey into creativity starts here.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-full font-semibold text-white hover:bg-blue-600"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NestHubHomePage;
