import React from "react";
import { useEffect } from "react";
const TvShows = () => {

  useEffect(() => {
      document.title = "Prime Video: Watch, rent or buy TV shows";
    }, []);

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Top spacing so navbar doesn’t overlap */}
      <div className="pt-20"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">TV Shows</h1>

        <p className="text-lg text-gray-300">
          Browse all your favorite TV shows.
        </p>
      </div>

    </div>
  );
};

export default TvShows;
