import React from "react";
import { useEffect } from "react";
const Subscription = () => {

  useEffect(() => {
      document.title = "Prime Video: Browse and start your subscriptions";
    }, []);

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Top spacing so navbar doesn’t overlap */}
      <div className="pt-20"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Subscriptions</h1>

        <p className="text-lg text-gray-300">
          Manage and explore your Prime Video subscriptions.
        </p>
      </div>

    </div>
  );
};

export default Subscription;
