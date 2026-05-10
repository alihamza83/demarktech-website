const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
];

export default function ClientLogoMarquee() {
  const doubled = [...logos, ...logos];

  return (
    <div className="relative w-full bg-[#050a27] py-8 sm:py-4 -mt-12">
     
      <div className="overflow-hidden px-4">
        <div className="animate-marquee flex w-max gap-12 sm:gap-16">
          {doubled.map((logo, i) => (
            <img
              key={`${logo}-${i}`}
              src={logo}
              alt=""
              className="h-8 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 sm:h-10"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
