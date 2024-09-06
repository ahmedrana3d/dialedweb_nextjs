import { useEffect, useState } from "react";

export const Meteors = ({ number = 20 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      animationDelay: `${Math.random() * 1 + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
      width: '5px', // Define a size for the meteors
      height: '5px', // Define a size for the meteors
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="
            pointer-events-none 
            absolute 
            left-1/2 
            top-1/2 
            rounded-full 
            bg-slate-500 
            shadow-[0_0_0_1px_#ffffff10] 
            size-0.5 
            rotate-[215deg] 
            animate-meteor
          "
          style={style}
        >
          <div className="
            pointer-events-none 
            absolute 
            top-1/2 
            -z-10 
            h-px 
            w-[50px] 
            -translate-y-1/2 
            bg-gradient-to-r 
            from-slate-500 
            to-transparent
          " />
        </span>
      ))}
    </>
  );
};

export default Meteors;