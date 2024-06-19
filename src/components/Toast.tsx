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
    <div className={`toast ${visible ? 'fade-in' : ''}`}>
      Looking for our world map? 
      <Link href="https://map.ezsmp.live" target="_blank" rel="noopener noreferrer" className="toast-link">
        Click here!
      </Link>
    </div>
  );
};

export default Toast;
