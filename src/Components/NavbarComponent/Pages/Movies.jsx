import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

// ====== LOCAL IMAGES (correct imports) ======
import mi2Banner from "/src/assets/Movies/mi2-banner.jpeg";
import miTitle from "/src/assets/Movies/mi-title.png";

import kantaraBanner from "/src/assets/Movies/kantara-banner.jpeg";
import kantaraTitle from "/src/assets/Movies/kantara-title.png";

import jataraBanner from "/src/assets/Movies/jatara-banner.jpeg";
import jataraTitle from "/src/assets/Movies/jatara-title.png";

import smurfBanner from "/src/assets/Movies/smurf-banner.jpeg";
import smurfTitle from "/src/assets/Movies/smurf-title.png";

import thanalBanner from "/src/assets/Movies/thanal-banner.jpeg";
import thanalTitle from "/src/assets/Movies/thanal-title.png";

import ohBanner from "/src/assets/Movies/oh-banner.jpeg";
import ohTitle from "/src/assets/Movies/oh-title.png";

import dieselBanner from "/src/assets/Movies/diesel-banner.jpeg";
import dieselTitle from "/src/assets/Movies/diesel-title.png";

import baagiBanner from "/src/assets/Movies/baagi-banner.jpeg";
import baagiTitle from "/src/assets/Movies/baagi-title.png";

import stampImg from "/src/assets/Movies/common-stamp.png";
// ============================================

const Movies = () => {
  useEffect(() => {
    document.title = "Prime Video Movies – rental or buy";
  }, []);

  const slides = [
    {
      banner: mi2Banner,
      titleImg: miTitle,
      stamp: stampImg,
      description:
        "Our lives are the sum of our choices.\nTom Cruise is Ethan Hunt in Mission: Impossible - The Final Reckoning.",
      rank: "#1 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: kantaraBanner,
      titleImg: kantaraTitle,
      stamp: stampImg,
      description:
        "The tribals of Kantara decide to take a step towards prosperity,\nThe opposition they face sparks a wildfire.",
      rank: "#2 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: jataraBanner,
      titleImg: jataraTitle,
      stamp: stampImg,
      description:
        "Set in Kerala's historic temple, this supernatural thriller\nties folklore with modern skepticism.",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: smurfBanner,
      titleImg: smurfTitle,
      stamp: stampImg,
      description:
        "Smurfette leads a daring rescue to save Papa Smurf,\nand maybe the universe.",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: thanalBanner,
      titleImg: thanalTitle,
      stamp: stampImg,
      description:
        "When life's test pushes two people to the brink,\none rises as hero and the other falls.",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: ohBanner,
      titleImg: ohTitle,
      stamp: stampImg,
      description:
        "Claire holds her chaotic family together,\nbut now must discover the unexpected magic within.",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: dieselBanner,
      titleImg: dieselTitle,
      stamp: stampImg,
      description:
        "In 1980s Chennai, smuggler Manohar raises Vaasu.\nYears later corruption tears the city apart.",
      rank: "#4 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: baagiBanner,
      titleImg: baagiTitle,
      stamp: stampImg,
      description:
        "After a train accident, Ronnie spirals as reality blurs.\nLove and obsession collide.",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "A",
    },
  ];

  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,

    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center relative bottom-15 gap-2">
          {dots}
        </ul>
      </div>
    ),

    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-500 hover:bg-white transition-all"></div>
    ),
  };

  return (
    <div className="bg-black min-h-screen text-white relative">
      <div
        className="fixed top-0 left-0 w-full z-50 pt-20
         bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75),rgba(0,0,0,0.45),rgba(0,0,0,0))]
         transition-all duration-300"
      >
        <Navbar />
      </div>

      <div className="relative w-full h-[85vh] select-text">
        <div className="relative h-full w-full">
          <Slider {...settings} ref={setSliderRef}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-[85vh]">
                <img
                  src={slide.banner}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-45 left-20 z-10">
                  <img src={slide.stamp} className="w-32 md:w-20" alt="Stamp" />
                </div>

                <div className="absolute w-full left-20 top-60 z-10">
                  <img
                    src={slide.titleImg}
                    className="w-[250px] md:w-[450px]"
                    alt="Movie Title"
                  />

                  <p className="text-md text-green-400 font-semibold">
                    {slide.rank}
                  </p>

                  <p className="mt-1 font-semibold text-xl whitespace-pre-line">
                    {slide.description}
                  </p>

                  <div className="flex items-center text-xl space-x-5 mt-4">
                    <NavLink className="bg-[#3E4248] font-bold p-1 pl-5 pr-5 rounded-md hover:text-black hover:bg-white transition duration-300">
                      Join Prime <br /> Watch now
                    </NavLink>

                    <NavLink className="bg-[#3E4248] font-semibold p-3 rounded-full hover:bg-white hover:text-black transition duration-300">
                      <IoMdAdd className="text-4xl" />
                    </NavLink>

                    <NavLink className="bg-[#3E4248] font-semibold p-3 rounded-full hover:bg-white hover:text-black transition duration-300">
                      <MdInfoOutline className="text-4xl" />
                    </NavLink>
                  </div>

                  <div className="flex mt-2 w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaShoppingBag className="text-yellow-400" />
                      <p className="font-semibold">{slide.membershipText}</p>
                    </div>

                    <p className="font-semibold bg-[#33373D] mr-25 p-1 text-[12px] rounded-md">
                      {slide.rating}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent"></div>
              </div>
            ))}
          </Slider>
        </div>

        <button
          onClick={() => sliderRef?.slickPrev()}
          className="absolute left-5 top-1/2 -translate-y-1/2"
        >
          <FaChevronLeft className="text-[30px]" />
        </button>

        <button
          onClick={() => sliderRef?.slickNext()}
          className="absolute right-5 top-1/2 -translate-y-1/2"
        >
          <FaChevronRight className="text-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default Movies;
