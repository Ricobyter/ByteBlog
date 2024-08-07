import React from "react";

function RecommendedTopics() {
  return (
    <div className="max-w-300 mb-8">
      <h1 className="text-2xl font-medium font-platypi pb-2">
        Recommended Topics
      </h1>
      <hr className="mb-4" />
      <div className="flex w-full gap-2 flex-wrap">
        <button className="bg-gray-100 px-2  rounded-xl py-1 text-sm">
          Travelling
        </button>
        <button className="bg-gray-100 px-2  rounded-xl py-1 text-sm">
          Javascript
        </button>
        <button className="bg-gray-100 px-2  rounded-xl py-1 text-sm">
          Lifestyle
        </button>
        <button className="bg-gray-100 px-2  rounded-xl py-1 text-sm">
          Technology
        </button>
      </div>
    </div>
  );
}

export default RecommendedTopics;
