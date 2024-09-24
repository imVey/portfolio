import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projets" className="projects pt-20">
      <h1 className="font-bold text-2xl">Projects</h1>
      <p className="text-gray-500 font-bold">
        You can click on the card to open in other windows the chosen project.
      </p>
      <div className="flex flex-nowrap p-6 overflow-x-auto snap-x snap-mandatory space-x-6">
        <Link href="https://github.com/imVey/Projet-GarageVParrot" passHref>
          <div className="bg-violet-900 card border-3 border-solid border-sky-300 cursor-pointer m-4 p-6 rounded-lg transition-shadow hover:shadow-lg snap-center">
            <img
              src="/Moi.jpg"
              alt="Project 1"
              width={100}
              height={100}
              className="w-80 rounded-lg"
            />
            <h2 className="font-bold mt-4">Garage V Parrot</h2>
            <p className="mt-2">Ceci est un site pour un garage auto,</p>
          </div>
        </Link>

        <Link href="https://github.com/imVey/Projet-GarageVParrot" passHref>
          <div className="bg-violet-900 card border-3 border-solid border-sky-300 cursor-pointer m-4 p-6 rounded-lg transition-shadow hover:shadow-lg snap-center">
            <img
              src="/Moi.jpg"
              alt="Project 1"
              width={100}
              height={100}
              className="w-80 rounded-lg"
            />
            <h2 className="font-bold mt-4">Garage V Parrot</h2>
            <p className="mt-2">Ceci est un site pour un garage auto,</p>
          </div>
        </Link>

        <Link href="https://github.com/imVey/Projet-GarageVParrot" passHref>
          <div className="bg-violet-900 card border-3 border-solid border-sky-300 cursor-pointer m-4 p-6 rounded-lg transition-shadow hover:shadow-lg snap-center">
            <img
              src="/Moi.jpg"
              alt="Project 1"
              width={100}
              height={100}
              className="w-80 rounded-lg"
            />
            <h2 className="font-bold mt-4">Garage V Parrot</h2>
            <p className="mt-2">Ceci est un site pour un garage auto,</p>
          </div>
        </Link>

        <Link href="https://github.com/imVey/Projet-GarageVParrot" passHref>
          <div className="bg-violet-900 card border-3 border-solid border-sky-300 cursor-pointer m-4 p-6 rounded-lg transition-shadow hover:shadow-lg snap-center">
            <img
              src="/Moi.jpg"
              alt="Project 1"
              width={100}
              height={100}
              className="w-80 rounded-lg"
            />
            <h2 className="font-bold mt-4">Garage V Parrot</h2>
            <p className="mt-2">Ceci est un site pour un garage auto,</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
