import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold mb-12">
      <span className="text-white">
        {children}
      </span>
    </h2>
  );
}