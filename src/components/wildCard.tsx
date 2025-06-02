'use client';
import { type Animal, animals } from '@/static/animal';
import React, { useState, useEffect, useCallback } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
} from '@/components/modal';
import { useRouter } from 'next/navigation';
import FullScreenIcon from './icons/fullScreenIcon';
import CloseIcon from './icons/closeIcon';

export default function WildCard({ id }: { id: string }) {
  const animal: Animal | undefined = animals.find((animal) => animal.id === id);

  const [showDialog, setShowDialog] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (showDialog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showDialog]);

  const handleClose = useCallback(() => {
    setShowDialog(false);
    router.back();
  }, [router]);

  if (!animal) return <div>Animal not found</div>;

  return (
    <ModalOverlay className="p-4" open={showDialog}>
      <ModalContainer
        className="w-full h-full bg-cover bg-center bg-no-repeat p-5 sm:p-10 relative flex items-end"
        src={`url(${animal.imageSrc})`}
      >
        <ModalHeader className="w-full flex justify-between">
          <button
            className="modal-close-button rounded-full bg-neutral-700/50 p-2 z-20 cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon width={18} height={18} />
          </button>
          <button
            className="fullscreen-button rounded-full bg-neutral-700/50 p-2 z-20 cursor-pointer"
            onClick={() => window.location.reload()}
          >
            <FullScreenIcon width={18} height={18} />
          </button>
        </ModalHeader>
        <ModalTitle className="absolute bottom-10">{animal.name}</ModalTitle>
      </ModalContainer>
    </ModalOverlay>
  );
}
