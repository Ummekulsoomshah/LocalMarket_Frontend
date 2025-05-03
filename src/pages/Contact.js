import React from "react";
import PageHeading from "../components/PageHeading";

const Contact = () => {
  return (
    <div className="px-6 py-12 bg-gray-100 font-poppins">
      <PageHeading home="Home" pagename="Contact" />
      <div className="mx-auto max-w-screen-md rounded-lg shadow-lg p-8 bg-white border-2 border-gray-300">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <p className="mb-6 text-lg text-center text-gray-600">
          Have a question or suggestion? Feel free to reach out to us. We're happy to assist you!
        </p>
        <form action="#" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-bold text-gray-800"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-2 w-full p-2 text-sm border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-none focus:border-gray-500 shadow-md"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-bold text-gray-800"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-2 w-full p-2 text-sm border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-none focus:border-gray-500 shadow-md"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-800"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-2 text-sm border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-none focus:border-gray-500 shadow-md"
              placeholder="abc@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-bold text-gray-800"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-2 w-full p-2 text-sm border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-none focus:border-gray-500 shadow-md"
              placeholder="What is your query about?"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold text-gray-800"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"  // Reduced height by changing rows
              className="mt-2 w-full p-2 text-sm border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-none focus:border-gray-500 shadow-md"
              placeholder="Describe your issue or suggestion here..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-8 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-lg focus:outline-none focus:ring-none focus:border-gray-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
