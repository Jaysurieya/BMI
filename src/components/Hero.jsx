import '../css/Hero.css'
import { BackgroundBeams } from "./BackgroundBeams";
import { TypewriterEffect } from "./TypewriterEffect";
import AnimatedContent from "./AnimatedContent/AnimatedContent";
import ShinyText from './ShinyText/ShinyText';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
    const navigate = useNavigate();
    return(
        <div className="app-container">
      <div className="background-container">
        <BackgroundBeams />
      </div>

      <div className="content-container">
      <TypewriterEffect
        words={[{ text: "Welcome to Fitmate" }]}
        className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-center"
        cursorClassName="text-pink-500"
      />
        <div className='flex-row'>
          <AnimatedContent delay={1.8} distance={150}>
            <button className="buttons"  onClick={() => navigate('home')}>
              <ShinyText text='Get Started' />
            </button>
          </AnimatedContent>
          <AnimatedContent delay={1.8} distance={150}>
            <button className="buttons" onclick={() => navigate('signup')}>
            <ShinyText text='Sign Up' />
            </button>
          </AnimatedContent>
        </div>
      </div>
    </div>
    );
};