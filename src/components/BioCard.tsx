// src/components/BioCard.tsx
import React from 'react';
import Card from './Card';

const BioCard: React.FC = () => {
  return (
    <Card className="bio-card">
      <h1 className="site-title">
        tandukuda
      </h1>
      <p style={{ marginBottom: '0.75rem' }}>
        tandukuda is a 3D artist based in the bustling city of Surabaya, Indonesia, known for bringing
        hauntingly atmospheric visuals to life. From stage visuals and live productions to music
        videos and NFTs, tandukuda's work spans diverse media, each piece immersing the audience in an
        unforgettable, eerie experience.
      </p>
      <p>
        Driven by a relentless passion for innovation, tandukuda explores avant-garde techniques to
        create dark and captivating worlds that push the boundaries of digital design. With a unique
        style that merges horror and immersive storytelling, tandukuda's work is crafted to
        leave a lasting impact, engaging viewers and sparking inspiration in those who encounter his
        haunting art.
      </p>
    </Card>
  );
};

export default BioCard;
