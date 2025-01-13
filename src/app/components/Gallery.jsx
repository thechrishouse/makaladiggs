import Image from "next/image";

export default function Gallery({ images, gridCols = 2, className = "" }) {
  return (
    <div className={`min-h-screen min-w-[750px] bg-white px-4 py-12 ${className}`}>
    
      <div className={`m-12 grid grid-cols-${gridCols} gap-8`}>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full min-w-[200px] h-auto"
            width={500}
            height={500}
            layout="responsive"
            loading="eager"
          />
        ))}
      </div>
    </div>
  );
}