// src/components/LinksCard.tsx
import React from 'react';
import Card from './Card';

const LinksCard: React.FC = () => {
  const links = [
    { name: 'contact/inquiries', href: 'mailto:info@tandukuda.xyz' },
    { name: 'license my artwork(s)', href: 'https://artgrab.co/art/tandukuda' },
    { name: 'prints', href: 'https://www.inprnt.com/gallery/tandukuda/' },
    { name: 'instagram', href: 'https://www.instagram.com/tandukuda' },
    { name: 'twitter', href: 'https://x.com/tandukuda' },
    { name: 'youtube', href: 'https://www.youtube.com/@tandukuda' }
  ];

  return (
    <Card>
      <nav aria-label="Site links">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target="_blank"
              style={{ 
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </Card>
  );
};

export default LinksCard;
