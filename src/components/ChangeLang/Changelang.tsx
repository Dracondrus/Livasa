'use client';

import { useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import Flag from 'react-world-flags';

const locales = [
  { code: 'English', label: 'EN', country: 'US' },
  { code: 'Руссикй', label: 'RU', country: 'RU' },
  { code: "O'zbek", label: 'UZ', country: 'UZ' }
];

export default function ChangeLang() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Кнопка для открытия меню */}
      <button
        onClick={toggleDropdown}
        style={{
          backgroundColor: '#3d3d3dff',
          color: '#ffffff',
          padding: '4px 10px 6px 10px',
          border: '1px solid #555',
          borderRadius: '8px',
          cursor: 'pointer',
      
       
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background-color 0.2s ease'
        }}
      >
<div>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
    <path d="M12 2a15.3 15.3 0 0 0 0 20" />
  </svg>
</div>


      </button>

      {/* Выпадающее меню */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '110%',
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#2b2b2b',
            border: '1px solid #444',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            zIndex: 1000,
            padding: '4px 0',
            
            animation: 'fadeIn 0.2s ease-in-out'
          }}
        >
          {locales.map(({ code, country }) => {
    
            return (
              <Link
                key={code}
                href={pathname}
                locale={code}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '4px 8px',
                  textDecoration: 'none',
             
                  fontWeight:700,
            
                  borderRadius: '4px',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setOpen(false)}
           
              >
       
                  {code}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
