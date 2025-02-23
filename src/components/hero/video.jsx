import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import Promovideo from "../../../public/images/video promo.mp4";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-4"
      style={{ transform: `rotateY(${mousePosition.x / 50}deg) rotateX(${mousePosition.y / 50}deg)` }}
    >
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-full"
          src={Promovideo}
          controls
        ></video>
      </div>
      {/* <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />} {isPlaying ? "Pause" : "Play"}
      </button> */}
    </motion.div>
  );
}
