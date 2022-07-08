import React from 'react';


export default function AboutSection2(){
    return(
        <div name="about" className="w-full dark:bg-gray-700">
            <div className="max-w-[1280px] mx-auto py-9">
                <div className="grid md:grid-cols-3 gap-3 px-2 text-center">
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-4xl font-semibold text-darkGreen">Custom your<br></br> needs</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-4xl font-semibold text-darkGreen">Secure<br></br> Payment</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-4xl font-semibold text-darkGreen">Worry<br></br> less</p>
                    </div>
                </div>
            </div>
        </div>
    );
}