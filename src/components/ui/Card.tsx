import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hover = true
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md overflow-hidden 
        ${hover ? 'transition-all duration-300 hover:shadow-xl' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardMedia: React.FC<{
  src: string;
  alt?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait';
  className?: string;
}> = ({ 
  src, 
  alt = '', 
  aspectRatio = 'square',
  className = ''
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[4/3]',
    portrait: 'aspect-[3/4]'
  };
  
  return (
    <div className={`${aspectRatioClasses[aspectRatio]} overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-lg font-semibold mb-2 ${className}`}>
      {children}
    </h3>
  );
};

export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`px-4 py-3 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export default Card;