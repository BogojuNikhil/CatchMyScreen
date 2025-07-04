import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="px-6 mt-40 md:px-16 lg:px-36 w-full bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] text-gray-300 border-t border-gray-700">
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-600 pb-14">
        {/* Logo & About */}
        <div className="md:max-w-96">
          <img className="w-28 h-auto" src={logo} alt="CatchMyScreen logo" />
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            CatchMyScreen helps you discover, watch, and explore your favorite trailers in one sleek, interactive platform. Seamless experience. Cinematic design. 🎬
          </p>
          <div className="flex items-center gap-2 mt-6">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                alt="Download on Google Play"
                className="h-10 w-auto border border-white/20 hover:border-white rounded transition-all duration-300"
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                alt="Download on App Store"
                className="h-10 w-auto border border-white/20 hover:border-white rounded transition-all duration-300"
              />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 flex items-start md:justify-end gap-16 lg:gap-40 pt-6 text-sm">
          <div>
            <h2 className="font-semibold mb-5 text-white tracking-wide">CatchMyScreen</h2>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Browse Trailers</a></li>
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-white tracking-wide">Support</h2>
            <ul className="space-y-2 text-gray-400">
              <li><a href="tel:+918790219323" className="hover:text-white transition">+91-8790219323</a></li>
              <li><a href="mailto:support@catchmyscreen.in" className="hover:text-white transition">support@catchmyscreen.in</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="pt-6 pb-5 text-center text-sm text-gray-500 tracking-wide">
        © {new Date().getFullYear()} CatchMyScreen. All Rights Reserved. Made with ❤️ by{" "}
        <a
          href="https://github.com/BogojuNikhil/CatchMyScreen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Nikhil Bogoju
        </a>.
      </p>
    </footer>
  );
};

export default Footer;