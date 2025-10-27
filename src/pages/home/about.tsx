import { useEffect, useState } from 'react';
import ZoomableImage from '@/components/shared/image-zoom';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const photos = [
    '/assets/images/p3.jpg',
    '/assets/images/p2.jpg',
    '/assets/images/p4.jpg',
    '/assets/images/p5.jpg',
    '/assets/images/p6.jpg',
    '/assets/images/p7.jpg',
    '/assets/images/p8.jpg',
    '/assets/images/p9.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="w-full">
      {/* Desktop Grid Layout - 8 photos in 3x3 grid */}
      <div className="hidden lg:grid grid-cols-3 gap-2 h-[500px]">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <ZoomableImage
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-3 h-[400px]">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg"
          >
            <ZoomableImage
              src={photo}
              alt={`Photo ${index + 1}`}
              className={`w-full h-full object-cover transition-all duration-500 ${
                index === currentIndex % photos.length ? 'scale-105 ring-2 ring-blue-500' : 'hover:scale-105'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="relative h-80 overflow-hidden rounded-lg">
          <ZoomableImage
            src={photos[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          {/* Photo indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="sm:py-14 p-7">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        About Me
      </h2>
      <div className="mt-8 w-full flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a computer science student with a passion for technology and software development. I love creating software that solves real-world problems and makes a positive impact on people's lives. When I'm not coding, you'll find me exploring the world, playing video games, or enjoying a game of chess.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <PhotoGallery />
        </div>
      </div>
    </section>
  );
}
