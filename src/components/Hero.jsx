import React from "react";
import bannerImg from "../assets/banner-stack.png"; // আপনার ড্রপ করা আসল ব্যানার

export default function Hero() {
  return (
    <header id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content Side */}
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-transparent bg-clip-text">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#technologies" className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
            Explore Technologies
          </a>
          <button className="border-2 border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Right Image Side */}
      <div className="flex justify-center items-center">
        <img 
          src={bannerImg} 
          alt="Development Stack Banner Illustration" 
          className="w-full max-w-md object-contain"
        />
      </div>
    </header>
  );
}
