import React from 'react';
import { FooterPage } from '../components/Footer';
import { NavigationBar } from '../components/Navbar';
import InsiderFAQ from './FaQSection/insider';


export default function FaqPages(){
    return(
        <div className="dark:bg-gray-600">
            <NavigationBar/>
            <div className="my-24">
                <InsiderFAQ/>
            </div>
            <div className="bottom-0">
                <FooterPage/>
            </div>
        </div>
    );
}