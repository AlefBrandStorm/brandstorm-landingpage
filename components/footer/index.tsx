import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '20px', backgroundColor: '#1C1C1C', width: '100%', position: 'fixed', bottom: 0 }}>
      <div>
        <Image
          src="/logo.svg"
          width={100}
          height={50}
          alt="logo"
        />
      </div>

      <p style={{fontWeight: 500}}>© 2024 BrandStorm.</p>

      <div style={{ justifyContent: 'space-evenly', alignItems: 'center', display: 'flex', gap: 24, flexDirection: 'row' }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/facebook.svg"
            width={32}
            height={32}
            alt="logo"
          />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/instagram.svg"
            width={32}
            height={32}
            alt="logo"
          />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/linkedin.svg"
            width={32}
            height={32}
            alt="logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;