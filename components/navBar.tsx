'use client'
import { Mail, Download } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { AvatarCircles } from './magicui/avatar-circles';
import { avatar } from '../data/avatar';
import Link from 'next/link';

export default function NavBar() {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScroll(true)
            } else { setScroll(false) }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (

        <nav className={`fixed w-full z-50 ${scroll ? 'bg-black/20 backdrop-blur-xl backdrop-brightness-[0.9]' : 'bg-black/00'} transition duration-300 px-8`}>
            <div className={`container h-[70px] mx-auto flex items-center justify-between rounded-b-2xl px-6`}>
                <AvatarCircles avatarUrls={avatar} />
                <ul className='flex flex-row gap-14'>
                    <li>
                        <Link href={`resume.pdf`}
                            className="text-white flex items-center gap-4 transform transition-transform duration-300 hover:scale-125"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                                <Download color="white" />
                        </Link>
                    </li>
                    <li>
                        <a className="text-white flex items-center gap-4 transform transition-transform duration-300 hover:scale-125" href="mailto:a.cendon19@gmail.com">
                            <Mail color="white" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}