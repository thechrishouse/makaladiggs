import { digitalImages, statsModel } from "../constants";
import { Gallery } from '../components';
import Image from "next/image";

export default function Digitals() {
  return (
    <div className="w-full h-full max-w-screen-xl mx-auto py-60 grid md:grid-cols-[1fr_2fr] sm:grid-cols-1 gap-8 px-16">
      <div className="min-w-[250px] flex flex-col max-w-[450px] mx-auto md:mr-8">
        <h2 className="text-2xl self-center md:self-start font-semibold mb-4">Stats</h2>
        <ul className="flex flex-row flex-wrap gap-4 md:flex-col md:items-start">
          <li>Height: {statsModel.height}</li>
          <li>Bust: {statsModel.bust}</li>
          <li>Waist: {statsModel.waist}</li>
          <li>Hips: {statsModel.hips}</li>
          <li>Shoe: {statsModel.shoe}</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-10 min-w-[650px]">
        {digitalImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Digital image ${index + 1}`}
            className="w-full h-auto min-w-[250px] sm:min-w-[200px]" // Added min-w classes
            width={500}
            height={500}
            layout="responsive"
          />
        ))}
      </div>
      <div className="absolute inset-0 top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
  );
}
