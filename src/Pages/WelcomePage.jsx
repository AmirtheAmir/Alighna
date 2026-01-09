import { RadialBg } from "../UI/RadialBg"; 
import styles from "../UI/RadialBg/RadialBg.module.css";

export default function WelcomePage() {
  return (
    <div className="h-full bg-bg-surface-primary w-full overflow-hidden rounded-3xl flex justify-center items-center">
      <div className={`flex flex-col justify-center ${styles.gradientBg} items-center gap-2 `}>
        <div className="flex flex-col items-center z-10 w-2/4 transform translate-y-full mt-48 ">
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
        <RadialBg />
      </div>
    </div>
  );
}