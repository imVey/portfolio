import Image from "next/image";
import React from "react";
import Intro from "./intro/page";
import Presentation from "./presentation/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <Presentation />
    </main>
  );
}
