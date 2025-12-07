import React, { useEffect, useRef } from "react";

const SearchBox = ({ onClose }) => {
  const boxRef = useRef();

  useEffect(() => {
    // Close on Escape
    const keyClose = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", keyClose);
    return () => window.removeEventListener("keydown", keyClose);
  }, [onClose]);

  // Click outside handler
  const handleClickOutside = (e) => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60  z-50 flex items-start justify-center pt-32"
      onClick={handleClickOutside} // overlay click
    >
      <div
        ref={boxRef}
        className="bg-[#141921] border border-white/20 w-[1050px] p-10 rounded-xl shadow-xl relative"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Search</h2>

        <input
          type="text"
          placeholder="Search movies, shows, channels..."
          className="w-full px-4 py-5 rounded-lg bg-white/20 text-white placeholder-gray-300 placeholder:text-lg outline-none"
          autoFocus
        />
      </div>
    </div>
  );
};

export default SearchBox;
