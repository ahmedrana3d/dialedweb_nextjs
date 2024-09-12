export default function RetroGrid({ className, angle = 65 }) {
    return (
      <div
        className={`pointer-events-none absolute size-full overflow-hidden  [perspective:200px]  ${className}`}
        style={{ "--grid-angle": `${angle}deg` }}
      >
        {/* Grid */}
        <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
          <div
            className="
              animate-grid
              [background-repeat:repeat] 
              [background-size:60px_60px] 
              [height:300vh] 
              [inset:0%_0px] 
              [margin-left:-50%] 
              [transform-origin:100%_0_0] 
              [width:600vw]
              [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_0)]
            "
          />
        </div>
  
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t to-transparent to-90% from-black" />
      </div>
    );
  }
  