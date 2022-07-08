import React from 'react';

export default function AboutSection(){
    return(
        <div name="about" className="w-full bg-zinc-200 py-8">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mx-32">
                    <div className="flex flex-col justify-center md:items-start sm:w-[280px] text-center py-8 mb-4">
                        <button className=" text-xl bg-transparent hover:bg-darkGreen text-gray-800 hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded font-bold">GET FREE SAMPLES NOW!</button>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold md:text-4xl w-full">Make your supplies plan more sensible</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}