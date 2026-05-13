type ShineFrameProps = {
  roundedClass?: string;
};

/** Animated corner light accents used on hero and feature cards. */
export default function ShineFrame({ roundedClass = "rounded-[26px]" }: ShineFrameProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${roundedClass}`}>
      <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
        <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>
      <div className="absolute right-0 top-0 h-full w-[2px] overflow-hidden">
        <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 h-[2px] w-full overflow-hidden">
        <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>
      <div className="absolute left-0 top-0 h-full w-[2px] overflow-hidden">
        <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
      </div>
    </div>
  );
}
