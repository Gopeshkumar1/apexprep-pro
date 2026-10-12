'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  position?: 'right' | 'left' | 'bottom';
  children: React.ReactNode;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  position = 'right',
  children,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const positionStyles = {
    right: 'right-0 top-0 bottom-0 w-full max-w-md animate-slide-left',
    left: 'left-0 top-0 bottom-0 w-full max-w-md animate-slide-right',
    bottom: 'bottom-0 left-0 right-0 max-h-[85vh] rounded-t-3xl animate-slide-up',
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-xs">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'fixed z-10 bg-white shadow-2xl flex flex-col',
          positionStyles[position],
          className
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          {title && (
            <h3 className="text-base font-bold font-heading text-navy">{title}</h3>
          )}
          <button
            onClick={onClose}
            className="p-2 text-slate hover:text-navy hover:bg-cream rounded-full transition-colors ml-auto"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
};
