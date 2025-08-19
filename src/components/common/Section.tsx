import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'primary';
  containerWidth?: 'default' | 'wide' | 'narrow';
}

const Section = ({ 
  children, 
  className = '', 
  bgColor = 'white',
  containerWidth = 'default'
}: SectionProps) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white'
  };

  const containerWidths = {
    default: 'max-w-7xl',
    wide: 'max-w-8xl',
    narrow: 'max-w-5xl'
  };

  return (
    <section className={`py-16 ${bgColors[bgColor]} ${className}`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerWidths[containerWidth]}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
