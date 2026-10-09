import { useEffect, useState } from 'react';
import logoImg from '../assets/images/logo.png';

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 800); // wait for fade-out animation
    }, 3000); // show loading for 3 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`hg-loading ${fadeOut ? 'hg-loading--fade' : ''}`}>
      <div className="hg-loading__center">
        {/* Spinning circle */}
        <svg className="hg-loading__circle" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Track (faint ring) */}
          <circle
            cx="100" cy="100" r="90"
            fill="none"
            stroke="rgba(255, 179, 0, 0.1)"
            strokeWidth="3"
          />
          {/* Animated arc */}
          <circle
            className="hg-loading__arc"
            cx="100" cy="100" r="90"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="565.48"
            strokeDashoffset="400"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb300" />
              <stop offset="50%" stopColor="#e8720c" />
              <stop offset="100%" stopColor="#ffb300" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Logo in center */}
        <img src={logoImg} alt="Highway Grill" className="hg-loading__logo" />
      </div>
    </div>
  );
}
