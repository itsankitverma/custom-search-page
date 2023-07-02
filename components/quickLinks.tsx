import React from "react";

const QuickLinks = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-2">
        <p className="text-sm">Quick Links</p>
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-icon/youtube_318-183441.jpg?w=360"
            alt=""
            className="w-10"
          />
          <p className="text-xs">YouTube</p>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
