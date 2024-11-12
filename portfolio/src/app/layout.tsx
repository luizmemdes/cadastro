"use client";

import React, { useState, useEffect } from 'react';
import './globals.scss';
import { Poppins } from 'next/font/google';

const inter = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600']
});

export const metadata = {
  title: 'Luiz Mendes',
  description: 'Luiz is a full-stack developer in training, currently in the 4th semester of his Systems Analysis and Development program. He has hands-on experience in development and technical support, gained during an internship at Trier Sistemas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

 return (
    <html lang="en">
      <body className={inter.className}>
        <div className="theme-toggle">
          <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'} />
            <span className="slider"></span>
          </label>
          <span>{theme === 'dark' ? 'Off' : 'On'}</span>
        </div>
        {children}
      </body>
    </html>
  );
}