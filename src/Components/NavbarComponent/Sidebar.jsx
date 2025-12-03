import React, { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import user from "../../assets/user.svg";
import { NavLink } from "react-router-dom";

const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Spanish" },
  { code: "FR", label: "French" },
  { code: "DE", label: "German" },
  { code: "IT", label: "Italian" },
  { code: "JP", label: "Japanese" },
  { code: "CN", label: "Chinese" },
  { code: "IN", label: "Hindi" },
  { code: "RU", label: "Russian" },
  { code: "AR", label: "Arabic" },
  { code: "PT", label: "Portuguese" },
  { code: "KO", label: "Korean" },
  { code: "TH", label: "Thai" },
];

const Sidebar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const selectLanguage = (lang) => setSelectedLanguage(lang);

  return (
    <div className="flex items-center gap-5 text-white pr-10">
      {/* Search Button */}
      <button className="hover:bg-white hover:text-black p-2 rounded-full transition cursor-pointer">
        <IoIosSearch className="text-2xl" />
      </button>

      {/* Language Dropdown */}
      <div className="relative group">
        <button className="flex items-center gap-1 px-3 py-2 cursor-pointer hover:bg-white hover:text-black backdrop-blur-md rounded-lg text-white transition">
          <span className="font-semibold">{selectedLanguage.code}</span>
          <PiCaretDownBold className="transition-transform group-hover:rotate-180" />
        </button>

        <div className="absolute leading-3 right-0 mt-2 w-100 max-h-64 overflow-y-auto bg-white/20 backdrop-blur-lg border border-white/30 rounded-md grid grid-cols-5 gap-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50 p-2 shadow-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang)}
              className={`flex items-center justify-center px-2 py-2 text-white hover:bg-white hover:text-black font-semibold cursor-pointer rounded transition text-sm ${
                selectedLanguage.code === lang.code ? "font-bold" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Genres Dropdown */}
      <div className="relative group">
        <TbGridDots className="text-4xl cursor-pointer hover:bg-white hover:text-black p-2 rounded-full transition" />

        <div className="absolute right-0 mt-2 w-100 bg-white/20 backdrop-blur-lg border border-white/30 rounded-md font-semibold grid grid-cols-2 gap-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50 p-3 shadow-md">
          <span className="col-span-2 text-gray-300 font-semibold ml-10">Genres</span>

          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Action & Adventure</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Mystery & Thrillers</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Anime</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Romance</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Comedy</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Science Fiction</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Documentary</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Drama</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Fantasy</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Horror</button>
          <button className="text-white hover:bg-white hover:text-black px-2 py-1 rounded transition text-sm cursor-pointer">Kids</button>
        </div>
      </div>

      {/* User Avatar Dropdown */}
      <div className="relative group">
        <img
          src={user}
          alt="user"
          className="w-8 h-8 rounded-full cursor-pointer hover:ring-4 hover:ring-white transition"
        />

        <div className="absolute right-0 mt-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-4 shadow-xl grid grid-cols-1 gap-2 w-44 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
          <p className="text-gray-300 text-md text-center">Your account</p>

          <button className="text-white font-semibold hover:bg-white hover:text-black rounded-lg p-2 cursor-pointer text-sm text-left hover:opacity-80 transition">
            Sign In
          </button>

          <button className="text-white font-semibold text-sm text-left hover:bg-white cursor-pointer hover:text-black rounded-lg p-2 hover:opacity-80 transition">
            Help
          </button>

          <button className="text-white font-semibold text-sm text-left hover:bg-white cursor-pointer hover:text-black p-2 rounded-lg hover:opacity-80 transition">
            Watch Anywhere
          </button>
        </div>
      </div>

      {/* Join Prime Button */}
      <div className="cursor-pointer">
        <NavLink to="/join" className="cursor-pointer font-semibold bg-sky-600 hover:bg-sky-400 hover:shadow-md p-2.5 pl-5 pr-5 rounded-lg transition">
          Join Prime
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
