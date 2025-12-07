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

const Movies = () => {
  useEffect(() => {
    document.title = "Prime Video Movies – rental or buy";
  }, []);

  const slides = [
    {
      banner: "src/assets/Movies/mi2-banner.jpeg",
      titleImg: "src/assets/Movies/mi-title.png",
      stamp: "src/assets/Movies/common-stamp.png",
      description: "Our lives are the sum of our choices. Tom Cruise is Ethan Hunt in Mission: Impossible - The Final Reckoning.",
      rank: "#1 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: "src/assets/Movies/kantara-banner.jpeg",
      titleImg: "src/assets/Movies/kantara-title.png",
      stamp: "src/assets/Movies/common-stamp.png",
      description: "The tribals of Kantara decide to take a step towards prosperity, the opposition they face sparks a wildfire which",
      rank: "#2 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: "src/assets/Movies/jatara-banner.jpeg",
      titleImg: "src/assets/Movies/jatara-title.png",
      stamp: "src/assets/Movies/common-stamp.png",
      description: "Set in Kerala's historic temple, this supernatural thriller weaves together folklore and modern skepticism in a tale",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: "src/assets/Movies/smurf-banner.jpeg",
      titleImg: "src/assets/Movies/smurf-title.png",
      stamp: "src/assets/Movies/common-stamp.png",
      description: "Smurfette leads a daring rescue to save Papa Smurf, and maybe the universe.",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: "src/assets/Movies/thanal-banner.jpeg",
      titleImg: "src/assets/Movies/thanal-title.png",
      stamp: "src/assets/Movies/common-stamp.png",
      description: "When life's unrelenting test pushes two people to the brink, one person rises as the hero and the other falls into",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: "src/assets/Movies/oh-banner.jpeg",
      titleImg: "src/assets/Movies/oh-title.png",
      stamp: "src/assets/Movies/common-stamp.png",
      description: "Claire Clauster is the glue that holds her chaotic family together, but now must discover the unexpected magic of..",
      rank: "",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 13+",
    },
    {
      banner: "src/assets/Movies/diesel-banner.jpeg",
      titleImg: "src/assets/Movies/diesel-title.png",
      stamp: "src/assets/Movies/common-stamp.png",
      description: "In 1980s Chennai, oil smuggler Manohar raises Vaasu, the orphaned son of his slain friend. Years later, as corrupt forces",
      rank: "#4 in India",
      membershipText: "Watch with a Prime membership",
      rating: "U/A 16+",
    },
    {
      banner: "src/assets/Movies/baagi-banner.jpeg",
      titleImg: "src/assets/Movies/baagi-title.png",
      stamp: "src/assets/Movies/common-stamp.png",
      description: "After a train accident, Ronnie spirals as reality blurs, his loved ones torn between truth, obsession, and enduring",
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

    appendDots: dots => (
      <div className="">
        <ul className="flex justify-center relative bottom-15 gap-2">{dots}</ul>
      </div>
    ),

    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-gray-500 hover:bg-white transition-all"></div>
    ),
  };

  return (
    <div className="bg-black min-h-screen text-white relative">

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 pt-20
        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75),rgba(0,0,0,0.45),rgba(0,0,0,0))]
        transition-all duration-300">
        <Navbar />
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[85vh]">

        {/* ✅ Slider wrapped in relative container */}
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
                  <img
                    src={slide.stamp}
                    className="w-32 md:w-20"
                    alt="Stamp"
                  />
                </div>

                <div className="absolute w-full left-20 top-60 z-10">
                  <img
                    src={slide.titleImg}
                    className="w-[250px] md:w-[450px]"
                    alt="Movie Title"
                  />
                  <p className="text-md text-green-400 font-semibold">{slide.rank}</p>
                  <p className="mt-1 font-semibold text-xl">{slide.description}</p>

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

        {/* Left/Right Buttons */}
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
