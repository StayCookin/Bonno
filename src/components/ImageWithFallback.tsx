import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  onError?: () => void;
}

export function ImageWithFallback({ 
  src, 
  fallbackSrc = 'https://images.unsplash.com/photo-1581094794329-c8112b89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Engineering fallback image
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
