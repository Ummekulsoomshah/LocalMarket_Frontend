import React from "react";
import { footer } from "../data/Data";
import img from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#fffbd8] left-0 w-full">
      <div className="w-10/12 m-auto mb-0">
        <div className="flex justify-between pt-14 pb-14">
          <div className="text-gray-100 w-1/4">
            <div className="mb-5">
              <img src={img} alt="logo" />
            </div>
            <p>
              Locale Market brings neighborhood shopping to your fingertips.
              Send big love to small businesses — and enjoy the best of local
              communities, all from home.
            </p>

          </div>
          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900  dark:text-white">Company</h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class=" hover:underline">About</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Careers</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Brand Center</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900  dark:text-white">Help center</h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Discord Server</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Twitter</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Facebook</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900  dark:text-white">Legal</h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Licensing</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900 dark:text-white">Download</h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">iOS</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Android</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Windows</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">MacOS</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>

  );
};

export default Footer;