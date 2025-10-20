import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SectionContextType {
  openSection: string | null;
  setOpenSection: (section: string | null) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <SectionContext.Provider value={{ openSection, setOpenSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
}
