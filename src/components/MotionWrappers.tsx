import React from 'react';
import { motion } from 'motion/react';

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedSection: React.FC<{
  children: React.ReactNode;
  id: string;
  className?: string;
}> = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`w-full relative scroll-mt-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};
