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
        <div
          style={{ width, height }}
          className="flex items-center justify-center"
        >
          <span className="text-3xl blur-xs opacity-90">Failed to Load</span>
        </div>
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
