import React from "react";
import robusta from "../../assets/images/Robusta.jpeg";

export default function InsiderAbout(){
    return(
        <div name='platforms' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center dark:text-darkGreen'>About Us</h2>
                <p className='text-2xl py-8 text-gray-500 text-center dark:text-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
                nostrum tempore.
                </p>

                <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-4 dark:text-white'>
                    <img src={robusta} alt="images" className="border rounded-xl w-[480px] ml-10" />
                    <div className='mx-auto my-24'>
                        <h2 className=" text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a est neque.</h2>
                        <p className="py-4">We collaborate with coffee <span className="font-bold">farmers and experter</span> near <span className="font-bold">Mount Ijen</span> and <span className="font-bold">Mount Raung</span> that planted at an altitude of +/-1500 masl to sell <span className="font-bold">our unique</span> taste of coffee around the world. We start production from picking coffee cherries that have turned red. Then post-harvest treatment is carried out carefully and monitored by people who are competent to produce green bean coffee with a unique taste.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}