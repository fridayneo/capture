import React from 'react';
//import animation
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components';

function ContactUs(){
    return(
        <StyledContact variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <StyledTitle>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </StyledTitle>
            <div>
                <Hide>
                <StyledSocial variants={titleAnim}>
                    <StyledCircle />
                    <h2>Send us a message</h2>
                </StyledSocial>
                </Hide>
                <Hide>
                <StyledSocial variants={titleAnim}>
                    <StyledCircle />
                    <h2>Send us a email</h2>
                </StyledSocial>
                </Hide>
                <Hide>
                <StyledSocial variants={titleAnim}>
                    <StyledCircle />
                    <h2>Social media</h2>
                </StyledSocial>
                </Hide>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
@media (max-width: 1500px){
padding: 2rem;
font-size: 1rem;
}
`;
const StyledTitle = styled.div`
margin-bottom: 4rem;
color: black;
@media (max-width: 1500px){
margin-top: 5rem;
}
`;
const Hide = styled.div`
overflow: hidden;
`;
const StyledCircle = styled.div`
border-radius: 50%;
width: 3rem;
height: 3rem;
background: #353535;
`;
const StyledSocial = styled(motion.div)`
display: flex;
align-items: center;
h2{
    margin: 2rem;
}
`;

export default ContactUs;