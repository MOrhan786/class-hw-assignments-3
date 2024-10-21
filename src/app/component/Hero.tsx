const Hero = () => {
  return (
    <main>
      {/* Background image container */}
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('/imges/bg.jpeg')",
        }}
      >
        {/* Content on top of the gradient */}
        <div className="relative h-full flex flex-col justify-center items-center px-4">
          <h1 className="text-center font-black text-3xl text-white z-10 sm:text-4xl md:text-5xl">
            Welcome To My Website
          </h1>

          <div className="mt-8 sm:mt-12 md:mt-16 w-full max-w-lg p-4 bg-white rounded-md shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <p className=" text-teal-700 text-sm sm:text-base md:text-lg">
              This website was developed using React and Next.js, incorporating
              modern web development practices for performance and scalability.
              Tailwind CSS was used for styling, ensuring a responsive, clean
              design. Key sections like the header, hero, portfolio, and contact
              form were implemented with reusable components, enhancing
              maintainability. Projects within the portfolio section demonstrate
              various skills in JavaScript, user interface design, and
              application functionality. Additionally, the website includes
              animations and interactive features using Tailwind’s utility
              classes, providing a dynamic user experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
