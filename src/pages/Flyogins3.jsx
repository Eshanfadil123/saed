import { useEffect, useRef } from "react";

export function Flyogins3() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;

        if (!video) return;

        if (entry.isIntersecting) {
          video.muted = false;
          video.play();
        } else {
          video.muted = true;
          video.pause();
        }
      },
      {
        threshold: 0.6, // plays when 60% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col justify-center items-center h-[40vh] w-screen sm:h-screen md:h-screen lg:h-screen overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/videos/flyogins-3.mp4"
        className="absolute inset-0 w-full h-full object-fill z-0"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}