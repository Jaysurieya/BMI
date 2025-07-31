import './App.css';
import { BackgroundBeams } from "./components/BackgroundBeams";
import { TypewriterEffect } from "./components/TypewriterEffect";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import ShinyText from './components/ShinyText/ShinyText';

function App() {
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
          <AnimatedContent delay={3} distance={150}>
            <button className="buttons">
              <ShinyText text='Get Started' />
            </button>
          </AnimatedContent>
          <AnimatedContent delay={3} distance={150}>
            <button className="buttons" >
            <ShinyText text='Sign Up' />
            </button>
          </AnimatedContent>
        <div>

          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;