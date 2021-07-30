import React from 'react';
//import img
import home1 from '../img/home1.png';
//import styled
//import styled from 'styled-components';
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from '../styles';
//import framer mption
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

function AboutUsSection(){


    return(
        <StyledAbout>
        <StyledDescription>
            <motion.div className="title">
                <StyledHide>
                    <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                </StyledHide>
                <StyledHide>
                    <motion.h2 variants={titleAnim}>your <span>dream</span> come</motion.h2>
                </StyledHide>
                <StyledHide>
                    <motion.h2 variants={titleAnim}>true.</motion.h2>
                </StyledHide>
            </motion.div>
                <motion.p variants={fade}>
                    contact us for any thing you wanna contact for example how to cut video or how to wathc a film please.
                </motion.p>
                <motion.button variants={fade}>contact us</motion.button>
            
        </StyledDescription>
        <StyledImage>
                <motion.img variants={photoAnim} src={home1} alt='guy with the camera'></motion.img>
            </StyledImage>
            <Wave />
        </StyledAbout>
    )
}



export default AboutUsSection;
