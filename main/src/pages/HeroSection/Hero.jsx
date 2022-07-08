import React from 'react';
import scrnLogo from '../../assets/images/asset1.png';
import briket from "../../assets/images/briket1.png";
import rumput from "../../assets/images/rumput.png";
import gbean from "../../assets/images/gbean.png";
import binch from "../../assets/images/binch.png";

export default function HeroSection() {
    return(
        <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] py-2 px-6 m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Let Harverst with us</p>
                    <h1 className='py-3 text-4xl md:text-6xl font-bold'>Let Us Handle your business supply needs</h1>
                    <p className='text-2xl'>serving quality, and traceability commodity for your industry</p>
                </div>
                <div>
                    <img className='w-full' src={scrnLogo} alt="cover" />
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[1%]
                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
                border border-slate-300 rounded-xl text-center shadow-xl'>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'> <img src={gbean} className='h-6' alt='icon' /> <span className='mx-2'>Coffee</span></p>
                        <p className='flex px-4 py-2 text-slate-500'> <img src={rumput} className='h-6' alt='icon' /> <span className='mx-2'>Seaweed</span></p>
                        <p className='flex px-4 py-2 text-slate-500'> <img src={binch} className='h-6' alt='icon' /> <span className='mx-2'>White Charcoal</span></p>
                        <p className='flex px-4 py-2 text-slate-500'> <img src={briket} className='h-6' alt='icon' /> <span className='mx-2'>Briquettes</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}