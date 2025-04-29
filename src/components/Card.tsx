// src/components/Card.tsx
import React from 'react';
import { CardProps } from '../types';

const Card: React.FC<CardProps> = ({ children, className = '', style = {} }) => {
  return (
    <div className={`card ${className}`} style={style} role="region">
      {children}
    </div>
  );
};

export default Card;