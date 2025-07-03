import { useEffect, useState } from "react";

interface FloatingImage {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
}

const FloatingImages = () => {
  const [images, setImages] = useState<FloatingImage[]>([]);

  useEffect(() => {
    const createImage = () => {
      const newImage: FloatingImage = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 100,
        size: Math.random() * 40 + 20,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        rotation: Math.random() * 360,
      };

      setImages((prev) => [...prev, newImage]);
    };

    const interval = setInterval(createImage, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateImages = () => {
      setImages((prev) =>
        prev
          .map((img) => ({
            ...img,
            y: img.y - img.speed,
            rotation: img.rotation + 0.5,
            opacity: img.opacity - 0.001,
          }))
          .filter((img) => img.y > -100 && img.opacity > 0),
      );
    };

    const animationFrame = setInterval(animateImages, 16);
    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {images.map((image) => (
        <img
          key={image.id}
          src="https://cdn.poehali.dev/files/fa13ccd1-e7e9-4a38-b335-f41cc449026c.jpeg"
          alt="Smart Man Flying"
          className="absolute rounded-full object-cover transition-all duration-75"
          style={{
            left: `${image.x}px`,
            top: `${image.y}px`,
            width: `${image.size}px`,
            height: `${image.size}px`,
            opacity: image.opacity,
            transform: `rotate(${image.rotation}deg)`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingImages;
