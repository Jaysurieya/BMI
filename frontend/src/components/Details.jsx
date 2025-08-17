import React, { useState, useCallback } from 'react';
import Stepper, { Step } from './Stepper/Stepper';
import '../css/Details.css';
import DottedBackground from './Background';
import AnimatedModalDemo from './Animated-button-final';
import GlareHover from './GlareHover/GlareHover';
import DualScrollPicker_weight from './DualScrollPicker.jsx'; 
import DualScrollPicker_Height from './Dualscroll_height.jsx';
import AgeScrollPicker from './SingleScroll.jsx';
import LiveLocationFinder from './Location.jsx';
import AnimatedList from './AnimatedList/AnimatedList.jsx';
import {useNavigate} from 'react-router-dom';

export const Details = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        gender: null,
        location: null,
        weight: null,
        height: null,
        targetWeight: null,
        age: null,
        activityLevel: '',
        medicalDisabilities: '' // Assuming you'll add an input for this
    });
    const handleWeightChange = useCallback((kg, decimal) => {
        const combinedWeight = kg + decimal / 10;
        setFormData(prevData => ({ ...prevData, weight: combinedWeight }));
    }, []); 
    const handleTargetWeightChange = useCallback((kg, decimal) => {
        const combinedWeight = kg + decimal / 10;
        setFormData(prevData => ({ ...prevData, targetWeight: combinedWeight }));
    }, []);
    const handleHeightChange = useCallback((cm, decimal) => {
        const combinedHeight = cm + decimal / 10;
        setFormData(prevData => ({ ...prevData, height: combinedHeight }));
    }, []);
    const handleAgeChange = useCallback((selectedAge) => {
        setFormData(prevData => ({ ...prevData, age: selectedAge }));
    }, []);
    
    return(
        <div>
            <DottedBackground>
                <Stepper initialStep={1} onFinalStepCompleted={async() => {
                    console.log("Form Data Submitted:", formData);
                    try {
                        // Send the POST request to your API endpoint
                        const response = await fetch('http://localhost:5000/api/details/details_cu', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                // The 'Authorization' header is now removed
                            },
                            body: JSON.stringify(formData)
                        });

                        const result = await response.json();

                        if (!response.ok) {
                            // If the server responded with an error
                            throw new Error(result.message || 'Failed to save details.');
                        }

                        // --- SUCCESS --- ✅
                        console.log('Success:', result);
                        alert('Your details have been saved successfully!');
                        navigate("/dashboard");
                    } catch (error) {
                        // --- ERROR --- ❌
                        console.error('Submission Error:', error);
                        alert(`An error occurred: ${error.message}`);
                    } 
                    }}>
                    <Step>
                        <div className="step-content">
                            <h3>Hey There 👋🏻!</h3>
                            <p>We're happy that you've taken the first step towards a healthier you. We need a few details to kickstart your journey.</p>
                            <br />
                            <h3>What is your name?</h3>
                            <input
                                type='name' 
                                placeholder='Enter your name' 
                                className='input'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>What's your biological sex?</h3>
                            <p>We support all forms of gender expression. However, we need this to calculate your body metrics.</p>
                            <br />
                            <div className="box_out">
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    {/* Male Option */}
                                    <div 
                                        style={{ 
                                        border: formData.gender === 'male' ? '2px solid black' : '1px solid transparent',
                                        borderRadius: '10px',
                                        transition: 'border 0.2s ease'
                                        }}
                                        onClick={() => {
                                            setFormData({ ...formData, gender: 'male' })
                                        }}
                                    >
                                        <GlareHover 
                                        children={'Male'} 
                                        height='80px' 
                                        width='100px' 
                                        background={'rgb(215, 215, 215)'} 
                                        borderColor='rgb(215,215,215)' 
                                        />
                                    </div>

                                    {/* Female Option */}
                                    <div 
                                        style={{ 
                                        border: formData.gender === 'female' ? '2px solid black' : '1px solid transparent',
                                        borderRadius: '10px',
                                        transition: 'border 0.2s ease'
                                        }}
                                        onClick={() => setFormData({ ...formData, gender: 'female' })}
                                    >
                                        <GlareHover 
                                        children={'Female'} 
                                        height='80px' 
                                        width='100px' 
                                        background={'rgb(215, 215, 215)'} 
                                        borderColor='rgb(215,215,215)' 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <LiveLocationFinder 
                                value={formData.location}
                                onChange={(newLocation) => {
                                    setFormData({ ...formData, location: newLocation });
                                }}
                            />
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>What's your current weight?</h3>
                            <DualScrollPicker_weight onSelectionChange={handleWeightChange} />
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>What's your current Height?</h3>
                            <DualScrollPicker_Height onSelectionChange={handleHeightChange} />
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>What's your target weight? (Set some realistic and possible goal)</h3>
                            <DualScrollPicker_weight onSelectionChange={handleTargetWeightChange} />    
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>What's your current Age?</h3>
                            <AgeScrollPicker onSelectionChange={handleAgeChange} />
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>How active are you?</h3>
                            <p>Based on your lifestyle, we can assess your daily calorie requirements.</p>
                            <div    >
                                <AnimatedList showGradients={false} displayScrollbar={false} items={[
                                        "Mostly Sitting Seated work, low movement.",
                                        "Often Standing Standing work, occasional walking.",
                                        "Regularly Walking Frequent walking, steady activity.",
                                        "Physically Intense Work Heavy labor, high exertion."
                                    ]}  
                                    onItemSelect={(selectedActivity, index) => {
                                        // This function updates the 'activityLevel' field in your form data
                                        setFormData(prevData => ({
                                            ...prevData,
                                            activityLevel: selectedActivity
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                    </Step>
                    <Step>
                        <div className="step-content">
                            <h3>Medical disabilities</h3>
                            <input 
                                type='medicalDisabilities' 
                                placeholder='Enter your Disabilities' 
                                className='input'
                                value={formData.medicalDisabilities}
                                onChange={(e) => setFormData({ ...formData, medicalDisabilities: e.target.value })}
                            />
                        </div>
                    </Step>
                </Stepper>
            </DottedBackground>
        </div>
    );
}