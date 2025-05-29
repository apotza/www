import React from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Features from "./_components/Features";

const page = () => {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default page;
