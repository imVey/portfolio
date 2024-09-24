const Footer = () => {
  return (
    <footer className="footer bg-transparent pb-5 ">
      <div className="flex gap-52 mt-10 mb-20  ml-80">
        <section className="flex flex-col items-start mt-10">
          <a href="/terms-of-service">Terms of Service </a>
          <a href="/privacy-policy">Privacy Policy </a>
          <a href="/cookie-policy">Cookie Policy </a>
        </section>
        <section className="flex flex-col items-start mt-10">
          <a href="/sitemap.xml">Site Map </a>
          <a href="/accessibility-statement">Accessibility Statement </a>
          <a href="/contact">Contact </a>
        </section>
        <section className="flex flex-col items-start mt-10">
          <a
            href="https://github.com/imVey"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/bellamarwan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn{" "}
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter{" "}
          </a>
        </section>
      </div>
      <p className="mt-10 flex flex-col items-center">
        &copy; {new Date().getFullYear()} My Portfolio App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
