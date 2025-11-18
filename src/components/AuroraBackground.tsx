import { useEffect, useState } from "react";
import Aurora from './Aurora';

const AuroraBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.snap-container');
      if (container) {
        setScrollY(container.scrollTop);
      }
    };

    const container = document.querySelector('.snap-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <Aurora
        colorStops={["#3A29FF", "#8B5CF6", "#FF3232"]}
        blend={0.6}
        amplitude={1.2}
        speed={0.3}
        time={scrollY * 0.002}
      />
    </div>
  );
};

export default AuroraBackground;
