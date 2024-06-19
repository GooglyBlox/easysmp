'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Toast = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`minecraft-toast ${visible ? 'fade-in' : ''}`}>
      <Link href="https://map.ezsmp.live" target="_blank" rel="noopener noreferrer" className="minecraft-toast-link">
        Looking for our world map? Click here!
      </Link>
    </div>
  );
};

export default Toast;
