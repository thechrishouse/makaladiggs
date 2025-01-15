import { Gallery } from "/components";

export function Portfolio() {
  return (
    <>
      <Gallery images={portfolioImages} className="min-w-600px" />
    </>
  );
}
