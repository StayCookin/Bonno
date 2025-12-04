import { useState } from 'react';
import ubFallback from '../assets/UBotswana.png';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  onError?: () => void;
}

export function ImageWithFallback({ 
  src, 
  fallbackSrc = ubFallback, // Use UBotswana.png as fallback (engineering/campus image)
  alt, 
  className,
  onError
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
      onError?.();
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}
