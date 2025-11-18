import { useEffect, useState } from "react";

interface WaveTransitionProps {
  trigger: number;
}

const WaveTransition = ({ trigger }: WaveTransitionProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (trigger > 0) {
      setIsActive(true);
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <>
      <div className={`wave-transition ${isActive ? 'active' : ''}`} />
      <div className={`overlay-transition ${isActive ? 'active' : ''}`} />
    </>
  );
};

export default WaveTransition;
