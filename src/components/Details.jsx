import React from 'react';
import Stepper, { Step } from './Stepper/Stepper';
import { color } from 'framer-motion';
import '../css/Details.css';
import DottedBackground from './Background';
import AnimatedModalDemo from './Animated-button-final';
import Box_curved from './Box-curved';
import { style } from 'framer-motion/client';
import { BsCursor } from 'react-icons/bs';
import GlareHover from './GlareHover/GlareHover';

export const Details = () => {
    return(
        <div>
            <DottedBackground>
                <Stepper initialStep={1}>
                    <Step>
                        <div className="step-content">
                            <h3>Hey There 👋🏻!</h3>
                            <p>We're happy that you've taken the first step towards a healthier you. We need a few details to kickstart your journey.</p>
                            <br />
                            <h3>What is your name?</h3>
                            <input type='name' placeholder='Enter your name' className='input'/>
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>What's your biological sex?</h3>
                            <p>We support all forms of gender expression. However, we need this to calculate your body metrics.</p>
                            <br />
                            <div className="box_out">
                                <GlareHover children={'Male'} height='80px' width='100px' background={'rgb(215, 215, 215)'} borderColor='rgb(215,215,215)'/>
                                <GlareHover children={'Female'} height='80px' width='100px' background={'rgb(215, 215, 215)'} borderColor='rgb(215,215,215)'/>
                            </div>
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>Step 3: Confirmation</h3>
                            <p>Review and confirm your details.</p>
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>Step 3: Confirmation</h3>
                            <p>Review and confirm your details.</p>
                        </div>
                    </Step>
                </Stepper>
            </DottedBackground>
        </div>
    );
} 