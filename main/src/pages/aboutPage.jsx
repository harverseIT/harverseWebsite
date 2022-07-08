import React from 'react';
import { FooterPage } from '../components/Footer';
import { NavigationBar } from '../components/Navbar';
import InsiderAbout from './AboutUs/insiderAbout';


export default function AboutPages(){
    return(
        <div className="dark:bg-gray-600">
            <NavigationBar/>
            <InsiderAbout/>
            <FooterPage/>
        </div>
    );
}