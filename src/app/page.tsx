import React from "react";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Hero from "./component/Hero";

const HomePage = () => {
  return (
    <div id="home">
      {/* here we import header section  */}
      <Header />
      {/* here we import hero section */}
      <Hero />

      {/* About us section */}

      <section>
        <div className="m-4 py-2 h-16 bg-rose-700">
          <h1 className="text-center text-white font-bold sm:text-3xl mt-2">
            About Us
          </h1>
        </div>
      </section>
      {/* about section */}
      <section id="about">
        <div
          className="bg-cover bg-center h-96"
          style={{
            backgroundImage: "url('/imges/bg.jpeg')",
          }}
        >
          {/* Content on top of the gradient */}
          <div className="relative h-full flex flex-col justify-center items-center px-4">
            <div className="mt-8 sm:mt-12 md:mt-12 w-full max-w-screen-lg p-4 bg-white rounded-md shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
              <p className=" text-teal-700 text-sm sm:text-base md:text-lg">
                "Hi, I'm Fatima Asif, a dedicated student currently enrolled in
                the Governor of Sindh's Artificial Intelligence, Web 3.0, and
                Metaverse program. I am passionate about emerging technologies
                and excited to explore the future of AI, blockchain, and
                immersive digital experiences. My goal is to develop skills that
                will help shape the next generation of the web and virtual
                worlds."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section */}

      <section className="px-10 py-3.5 text-gray-800 body-font ">
        <div
        // className=" container px-10 py-2 mx-auto  "
        // style={{
        //   backgroundImage: "url('/imges/bg.jpeg')",
        // }}
        >
          <div className="p-4 text-center bg-rose-700">
            <h3 className="text-center  text-white font-bold sm:text-2xl text-2xl ">
              My Portfolio
            </h3>

            <p className="mb-8  text-justify leading-norma   text-yellow-300">
              We Have developed a range of exciting projects and are excited to
              share them with you! These innovative creations showcase various
              tools and technologies, demonstrating our commitment to crafting
              functional and engaging solutions. Take a look and explore the
              unique features and capabilities we've integrated into each one.
            </p>
          </div>
        </div>
      </section>

      {/* here we  project mention */}
      <section
        id="portfolio"
        className="px-10 py-8 text-gray-800 body-font"
        style={{
          backgroundImage: "url('/imges/bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* 1st box */}
            <div className="p-4 w-full md:w-1/4">
              <div className="bg-white  border p-4 rounded-lg font-sans overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded "
                  src="https://img.freepik.com/free-photo/school-supplies-arrangement-table_23-2148939159.jpg"
                  alt="calculator img"
                />

                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Project 01: Calculator
                </h1>
                <p className="leading-relaxed mb-3">
                  Description: A simple calculator app that performs basic
                  arithmetic operations. Perfect for learning the basics of
                  JavaScript functions and user interfaces.
                </p>
              </div>
            </div>

            {/* 2nd box */}
            <div className="p-4 w-full md:w-1/4">
              <div className="bg-white  border p-4 rounded-lg font-sans overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded"
                  src=" https://plus.unsplash.com/premium_photo-1661434648069-3063192e1ad5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXRtJTIwbWFjaGluZXxlbnwwfHwwfHx8MA "
                  alt="ATM  img"
                />

                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Project 02: ATM
                </h1>
                <p className="leading-relaxed mb-3">
                  Description: A simple of an ATM system that handles deposits,
                  withdrawls, and balance inquires.Useful for undersatnding user
                  input and data management
                </p>
              </div>
            </div>

            {/* 3rd box */}
            <div className="p-4 w-full md:w-1/4">
              <div className="bg-white  border p-6 rounded-lg font-sans overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded"
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPus9-d27Re0McwJo-TDxg9Sy_1oK9YtnFXQ&s"
                  alt="Currency convertor img"
                />

                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Project 03: Currency Converter
                </h1>
                <p className="leading-relaxed mb-3">
                  Description: A currency converter that uses real-time exchange
                  rates for accurate conversion.
                </p>
              </div>
            </div>

            {/* 4th box */}
            <div className="p-4 w-full md:w-1/4">
              <div className="bg-white  border p-4 rounded-lg font-sans overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded"
                  src=" https://cdn8.gametop.com/download-free-games/number-world-adventure/b1.jpg"
                  alt=" Game img"
                />

                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Project 04: Adventure GAme
                </h1>
                <p className="leading-relaxed mb-3">
                  Description:Atext based adventure game where plyaers make
                  choices that affect the outcome.Great for practicing control
                  flow and narrative development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact us  */}
      <section id="contact">
        <div className="m-4 py-2 h-16 bg-rose-700">
          <h1 className="text-center text-white font-bold sm:text-3xl mt-2">
            Contact Us
          </h1>
        </div>
      </section>

      <section
        className="px-10 py-8 text-gray-800 body-font min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/imges/bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex items-center justify-center">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Please fill this form if you have any queries, complaints, or
              messages for us.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Please read our privacy policy for any issue.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
