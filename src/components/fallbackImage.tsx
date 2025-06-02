'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

export const FallbackImage: React.FC<ImageProps> = ({
  src,
  width,
  height,
  alt,
  ...rest
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <>
      {imageFailed ? (
        <Image
          {...rest}
          src="/fallback.jpg"
          priority={false}
          width={width}
          height={height}
          alt={alt}
        />
      ) : (
        <Image
          {...rest}
          src={src}
          width={width}
          height={height}
          alt={alt}
          onError={() => setImageFailed(true)}
        />
      )}
    </>
  );
};
