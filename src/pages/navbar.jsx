import React from 'react';
import { Logs } from 'lucide-react';


const Navbar = () => {
    return (
        <section className='top-0 sticky z-50 bg-white'>
            <nav className="p-[15px] border flex justify-between lg:justify-around flex-wrap items-center">
                <div className="flex gap-3 items-center">
                    <img src="https://www.hamropatro.com/images/hamropatro.png" alt="Hamro Patro" className="w-[42px] h-[42px]" />
                    <h1 className="font-bold text-lg">HAMRO PATRO</h1>
                </div>
                <ul className="hidden lg:flex gap-6 text-sm ">
                    <li>Remit</li>
                    <li>Mart</li>
                    <li>Gifts</li>
                    <li>Recharge</li>
                    <li>Health</li>
                    <li className='hidden sm:block'>Bank Rates</li>
                    <li>Jyotish</li>
                    <li>Rashifal</li>
                    <li>Podcasts</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>Gold/Silver</li>
                    <li>Forex</li>
                    <li>Converter</li>
                </ul>
                <div className="hidden lg:flex items-center gap-4">
                    <button className="border px-2 py-1">EN</button>
                    <div className="w-[30px] h-[30px] bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">👤</span>
                    </div>
                </div>
                <div className='block lg:hidden cursor-pointer'>
                    <Logs className='text-2xl'/>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
