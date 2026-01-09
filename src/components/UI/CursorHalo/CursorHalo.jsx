import { useEffect, useRef } from "react";
import "../RadialBg/RadialBg.module.css";

export default function CursorHalo({className}) {
  const haloRef = useRef(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);

  useEffect(() => {
    const halo = haloRef.current;
    if (!halo) return;
    let animationId;
    let started = false;
    const move = () => {
      curX.current += (tgX.current - curX.current) / 10;
      curY.current += (tgY.current - curY.current) / 10;
      halo.style.transform = `translate(${Math.round(
        curX.current
      )}px, ${Math.round(curY.current)}px) translate(-50%, -50%)`;
      animationId = requestAnimationFrame(move);
    };
    const onMouseMove = (e) => {
      const parent = halo.offsetParent || halo.parentElement;
      const rect = parent.getBoundingClientRect();
      tgX.current = e.clientX - rect.left;
      tgY.current = e.clientY - rect.top;
      if (!started) {
        started = true;
        curX.current = tgX.current;
        curY.current = tgY.current;
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    move();
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <div ref={haloRef} className={className} />;
}
