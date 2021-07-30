import React from 'react';
//styles
import styled from 'styled-components';
import {StyledAbout} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveal} from '../animation';

function FaqSection(){
    const [element,controls] = useScroll();
    return(
        <StyledFaq ref={element} variants={scrollReveal} initail="hidden" animate={controls}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title='How do I start?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                </div>
            </Toggle>
            <Toggle title='Daily schedule?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                </div>
            </Toggle>
            <Toggle title='Different payment methods?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                </div>
            </Toggle>
            <Toggle title='What products do you offer?'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    )
}

const StyledFaq = styled(StyledAbout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
