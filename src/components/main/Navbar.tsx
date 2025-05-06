import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            backgroundColor: '#333'
        }}>
            <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' }}>
                Eduhack
            </div>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                margin: 0,
                padding: 0
            }}>
                <li style={{ margin: '0 10px' }}>
                    <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
                </li>
                <li className="mx-2">
                    <Link href="/contact" className="text-white no-underline">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;