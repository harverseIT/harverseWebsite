import React from "react";
import { FooterPage } from "../components/Footer";
import { NavigationBar } from "../components/Navbar";
import AboutSection from "./AboutSection/About";
import AboutSection2 from "./AboutSection/About2";
import HeroSection from "./HeroSection/Hero";
import SupportSection from "./SupportSection/Support";


export default function DashboardPage(){
    return(
        <div>
            <NavigationBar/>
            <HeroSection/>
            <AboutSection/>
            <AboutSection2/>
            <SupportSection/>
            <FooterPage/>
        </div>
    );
}