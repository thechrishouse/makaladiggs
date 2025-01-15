'use client';
import { works } from "../constants";

export default function Works() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-20 mt-16 space-y-8">
        <h1 className="text-center font-bold text-3xl">Brands I've Worked With</h1>
      {works.map((item, index) => (
        <div key={index} className="flex justify-center">
          <video
            src={item.src}
            controls
            className="w-full max-w-3xl h-auto"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}

