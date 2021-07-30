import React from 'react';
//import page components
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//import animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

import ScrollTop from '../components/ScrollTop';

function AboutUs(){
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutUsSection />
            <ServicesSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    )
}

export default AboutUs;
