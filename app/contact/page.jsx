import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-page h-screen">
      <div className="contact">
        <h1 className="font-bold text-2xl">Contact</h1>
        <p className="text-gray-500 font-bold">
          Besoin d'une info ? Contactez moi juste ici
        </p>
      </div>
      <div className="form-contact flex flex-wrap justify-start pt-10">
        <form className="w-2/5 flex flex-col p-5 rounded-md bg-violet-600 bg-opacity-40">
          <label className="" htmlFor="name">
            Nom:
          </label>
          <input
            type="text"
            className=" bg-violet-300 bg-opacity-20 rounded-sm"
            id="name"
            name="name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className=" bg-violet-300 bg-opacity-20 rounded-sm"
            id="email"
            name="email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className=" bg-violet-300 bg-opacity-20 rounded-sm"
            name="message"
            rows="10"
            required
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
