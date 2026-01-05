import { useRef, useEffect } from "react";

export default function useDragScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onDown = (e) => {
      // only left click
      if (e.button !== 0) return;
      isDown = true;
      el.classList.add("dragging");
      startX = e.pageX - el.getBoundingClientRect().left;
      startScrollLeft = el.scrollLeft;
    };

    const onLeave = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    const onUp = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.getBoundingClientRect().left;
      const walk = x - startX;
      el.scrollLeft = startScrollLeft - walk;
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return ref;
}
