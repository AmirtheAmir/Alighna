import { useEffect, useRef } from "react";
import "../../src/index.css";

export default function MouseBubble() {
  const bubbleRef = useRef(null);

  // current position
  const curX = useRef(0);
  const curY = useRef(0);

  // target (mouse) position
  const tgX = useRef(0);
  const tgY = useRef(0);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    let animationId;
    let started = false;
    const move = () => {
      // smooth interpolation
      curX.current += (tgX.current - curX.current) / 10;
      curY.current += (tgY.current - curY.current) / 10;

      bubble.style.transform = `translate(${Math.round(
        curX.current
      )}px, ${Math.round(curY.current)}px) translate(-50%, -50%)`;

      animationId = requestAnimationFrame(move);
    };

    // const onMouseMove = (e) => {
    //   tgX.current = e.clientX;
    //   tgY.current = e.clientY;
    // };
    const onMouseMove = (e) => {
      // ✅ coords relative to the element’s offset parent (usually .gradient-bg)
      const parent = bubble.offsetParent || bubble.parentElement;
      const rect = parent.getBoundingClientRect();

      tgX.current = e.clientX - rect.left;
      tgY.current = e.clientY - rect.top;

      // ✅ prevent “jump from 0,0” on first move
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

  return <div ref={bubbleRef} className="interactive" />;
}
