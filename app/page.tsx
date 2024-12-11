"use client";

import {Contact, Footer, Hero, NavBar, Testimonials} from "@/components";
import Projects from "@/components/Home/Projects";
import React from "react";


export default function Home() {

    return (
        <main>
            {/* Main Content */}
            <div>
                <NavBar/>
                <Hero/>
                <Projects/>
                <Contact/>
                <Testimonials/>
                <Footer/>
            </div>
        </main>
    );
}
