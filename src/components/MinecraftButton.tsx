import React from 'react';
import Link from 'next/link';

interface MinecraftButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  isDiscordButton?: boolean;
}

const MinecraftButton: React.FC<MinecraftButtonProps> = ({ children, onClick, className, href, isDiscordButton }) => {
  const buttonClass = `minecraft-button ${className || ''}`;

  if (isDiscordButton) {
    return (
      <a href="https://discord.gg/easysmp" target="_blank" rel="noopener noreferrer" className={buttonClass}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <span className={buttonClass}>{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default MinecraftButton;