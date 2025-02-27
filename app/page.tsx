import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-transparent to-blue-800/60">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default page;
