"use client";
import React, { ReactNode } from "react";

type Props = { open: boolean; onClose: () => void; children: ReactNode };

const Modal: React.FC<Props> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
