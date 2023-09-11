import React from "react";

const Contact = () => {
  return (
    <div
      name="contact" id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 md:pt-14"
    >
      <form
        method="POST"
        action="https://getform.io/f/b64f25bc-11d8-4546-b9a4-dc839d0844da"
        className="flex flex-col max-w-[600px] w-full bg-[#0a192f]"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <ul className="text-gray-300 py-4">
            <li>Email : abishekm101@gmail.com</li>
            <li>Mob : 8300238263</li>
          </ul>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="Name"
        />
        <input
          className="my-3 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          rows="5"
          placeholder="Message"
          name="Message"
        />

        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-1 my-8 mx-auto flex items-center">
          Let's Join
        </button>
      </form>
    </div>
  );
};

export default Contact;
