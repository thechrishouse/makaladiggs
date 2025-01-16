import { Gallery } from "../components";
import { portfolioImages } from "../constants";

export default function Portfolio() {
  return (
    <>
      <Gallery images={portfolioImages} className="min-w-600px" />
    </>
  );
}
