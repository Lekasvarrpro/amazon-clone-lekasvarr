import React, { useEffect } from "react";

const Join = () => {
  useEffect(() => {
    document.title = "Amazon Sign-In";

    const changeFavicon = (iconURL) => {
      const link = document.querySelector("link[rel='icon']");
      
      if (link) {
        link.href = iconURL + "?v=" + Date.now(); // force refresh
      }
    };

    // Set Join page favicon (IMPORTANT: folder name must match)
    changeFavicon("/public/Images/joinFavi.ico");

    return () => {
      changeFavicon("/public/Images/logo.ico");
      document.title = "Welcome to Prime Video";
    };
  }, []);

  return (
    <div className="text-white text-5xl p-20">
      Join Prime Page
    </div>
  );
};

export default Join;
