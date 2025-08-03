'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { AuthGoogleSvg } from '@/components/SVG';

export default function SignUpForm() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      const userToSend = {
        ...session.user,
        firstName: "",
        secondName: "",
        phoneNumber: "",
      };

      fetch("/api/users/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userToSend),
      })
        .then((res) => {
          if (res.ok) router.push("/");
        })
        .catch(console.error);
    }
  }, [status, session, router]);
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
