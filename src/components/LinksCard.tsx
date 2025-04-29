// src/components/LinksCard.tsx
import React from 'react';
import Card from './Card';

const LinksCard: React.FC = () => {
  const links = [
    { name: 'contact/inquiries', href: '#contact' },
    { name: 'license my artwork(s)', href: '#license' },
    { name: 'prints', href: '#prints' },
    { name: 'instagram', href: '#instagram' },
    { name: 'twitter', href: '#twitter' },
    { name: 'youtube', href: '#youtube' }
  ];

  return (
    <Card>
      <nav aria-label="Site links">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
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