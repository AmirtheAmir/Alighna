import MouseBubble from "../components/MouseBubble";
export default function StartingPage() {
  return (
    <div className="h-full bg-bg-surface-primary w-full overflow-hidden rounded-3xl flex justify-center items-center">
      <div className="flex flex-col justify-center gradient-bg items-center gap-2 ">
        {/* text container */}
        <div className="flex flex-col items-center z-10 w-2/4 transform translate-y-full mt-16 ">
          <div className="flex flew-row gap-2 items-center">
            <span className="text-primary size-3xl-400">Welcome to</span>
            <span className="text-primary size-3xl-600">Alighna</span>
          </div>
          <div>
            <h2 className="text-secondary size-xl-400 text-center">
              Manage your people, projects, and performance in one clear,
              unified workspace.
            </h2>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="20"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <MouseBubble />
        </div>
      </div>
    </div>
  );
}
