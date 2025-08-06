'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { AuthGoogleSvg } from '@/components/SVG';

export default function SignUpForm() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      const checkAndAddUser = async () => {
        try {
          const res = await fetch(`/api/users/${session.user.id}`);

          if (res.status === 200) {
            // ✅ Пользователь уже существует — просто перенаправляем
            router.push('/');
          } else if (res.status === 404) {
            // ❌ Пользователь не найден — добавляем
            const addRes = await fetch('/api/users/add', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: session.user.id,
                email: session.user.email,
                image: session.user.image,
                name: session.user.name,
                firstName: '',
                secondName: '',
                phoneNumber: '',
                about: '',
                properties: [],
                quantitySetupPropert: 6,
              }),
            });

            if (addRes.ok) {
              router.push('/');
            } else {
              console.error('❌ Failed to add user');
            }
          } else {
            console.error('❌ Unexpected error while checking user');
          }
        } catch (err) {
          console.error('❌ Error:', err);
        }
      };

      checkAndAddUser();
    }
  }, [session, status, router]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        padding: '10px 16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onClick={() => signIn('google')}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#4285F4';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E0E0E0';
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <AuthGoogleSvg />
      </span>
      <span style={{ fontSize: '16px', fontWeight: 500, color: '#333' }}>
        Enter with Google
      </span>
    </div>
  );
}
