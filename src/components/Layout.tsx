// src/components/Layout.tsx
import React, { useEffect, useState } from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import BioCard from './BioCard';
import LinksCard from './LinksCard';

const Layout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main>
      <BackgroundAnimation />
      
      <div style={{
        position: isMobile ? 'relative' : 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: isMobile ? 'auto' : '100%',
        padding: isMobile ? '16px' : '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isMobile ? 'flex-start' : 'space-between',
        zIndex: 2,
        overflowY: isMobile ? 'auto' : 'hidden',
        gap: isMobile ? '24px' : '0',
      }}>
        <div style={{ 
          alignSelf: 'flex-start',
          marginBottom: isMobile ? '24px' : '0',
          width: isMobile ? '100%' : 'auto',
          maxWidth: isMobile ? '100%' : '400px',
        }}>
          <BioCard />
        </div>
        
        <div style={{ 
          alignSelf: 'flex-start',
          width: isMobile ? '100%' : 'auto',
          maxWidth: isMobile ? '100%' : '400px',
        }}>
          <LinksCard />
        </div>
      </div>
    </main>
  );
};

export default Layout;