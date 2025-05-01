import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  fullWidth?: boolean;
  id?: string;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  className = '',
  fullWidth = false,
  id,
  animate = true
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const Wrapper = animate ? motion.section : 'section';
  const HeaderContainer = animate ? motion.div : 'div';
  
  const animationProps = animate ? {
    variants: containerVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" }
  } : {};
  
  return (
    <Wrapper
      id={id}
      className={`py-12 md:py-16 ${className}`}
      {...animationProps}
    >
      {(title || subtitle) && (
        <HeaderContainer 
          className={`${fullWidth ? '' : 'container mx-auto px-4'} mb-8 md:mb-12 text-center`}
          variants={animate ? titleVariants : undefined}
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </HeaderContainer>
      )}
      <div className={fullWidth ? '' : 'container mx-auto px-4'}>
        {children}
      </div>
    </Wrapper>
  );
};

export default Section;