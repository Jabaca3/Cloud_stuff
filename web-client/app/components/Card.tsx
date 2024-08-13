import React from "react";

const Card: React.FC = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Title</div>
        <p className="text-gray-700 text-base">
          This is a simple card component made with Tailwind CSS and Next.js.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
};

export default Card;
