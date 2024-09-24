import Link from "next/link";

const Presentation = () => {
  return (
    <div className="presentation-container ml-10 mt-10 flex flex-row ">
      <div className="image w-96">
        <img className="rounded-3xl  h-60 " src="Moi.jpg" alt="Photo de moi" />
      </div>
      <div className="presentation">
        <h1 className="presentation__title font-bold">Hello, I'm</h1>
        <h2 className="presentation__subtitle">Marwan</h2>
        <p className="presentation__description">
          Software Developer &amp; Mobile Developer..
        </p>
        <div className="presentation__buttons">
          <Link
            href="/projects"
            className="projects no-underline hover:underline"
          >
            Projects{" "}
          </Link>
          <Link
            href="/contact"
            className="contact no-underline hover:underline"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="button-container">
        <a
          className=" bg-violet-500 rounded-sm p-3 hover:bg-violet-700 "
          href="/public/MB.cv.pdf"
          download={"New CV Marwan BELLA.pdf"}
        >
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
};

export default Presentation;

// onClick={() => (window.location.href = "/contact")} il faut que je fix le bug d'afichage de ma page contact et projet
