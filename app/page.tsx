import Image from "next/image";
import React from "react";
import Intro from "./intro/page";
import Presentation from "./presentation/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <Intro />
      <Presentation />
      <Projects />
      <Contact />
    </main>
  );
}
