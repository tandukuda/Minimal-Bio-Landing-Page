// src/components/BioCard.tsx
import React from 'react';
import Card from './Card';

const BioCard: React.FC = () => {
  return (
    <Card className="bio-card">
      <h1 style={{ 
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
        marginBottom: '1rem',
        fontWeight: 700,
      }}>
        tandukuda
      </h1>
      <p style={{ marginBottom: '0.75rem' }}>
        <b>tandukuda</b> is a 3D artist based in the bustling city of Surabaya, Indonesia, known for bringing
        hauntingly atmospheric visuals to life. From stage visuals and live productions to music
        videos and NFTs, <b>tandukuda's</b> work spans diverse media, each piece immersing the audience in an
        unforgettable, eerie experience.
      </p>
      <p>
        Driven by a relentless passion for innovation, <b>tandukuda</b> explores avant-garde techniques to
        create dark and captivating worlds that push the boundaries of digital design. With a unique
        style that merges horror and immersive storytelling, tandukuda's work is crafted to
        leave a lasting impact, engaging viewers and sparking inspiration in those who encounter his
        haunting art.
      </p>
    </Card>
  );
};

export default BioCard;
