import { AnimatedGroup } from "components/motion-primitives/animated-group";

const images = [
  {
    src: "https://imgs.search.brave.com/2F2GshynWp3fkKMKy-D3Y8aC40Cp85pLESCCDIxEehE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMxL01pY2hhZWxf/SmFja3Nvbl9pbl8x/OTg4LmpwZw",
    title: "Michael Jackson",
  },
  {
    src: "https://i.pinimg.com/474x/06/ff/32/06ff329510ed97e04d88d2d0da2ba191.jpg",
    title: "Anirudh Ravichander",
  },
  {
    src: "https://i.pinimg.com/236x/3c/31/bc/3c31bcff82e57dce5df0532f13ec8359.jpg",
    title: "Ilayaraaja",
  },
  {
    src: "https://i.pinimg.com/236x/de/f3/dc/def3dc93af9686e78bda2c8fc19d0c9e.jpg",
    title: "A R Rahman",
  },
];

export function AnimatedGroupPreset() {
  return (
    <AnimatedGroup
      className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4"
      preset="scale"
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="relative group overflow-hidden rounded-[6px] shadow-md transition-all duration-300 hover:scale-[1.03]"
        >
          <img
            src={img.src}
            alt={img.title}
            className="h-150 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white text-xl font-semibold">{img.title}</h3>
          </div>
        </div>
      ))}
    </AnimatedGroup>
  );
}
