import React, { useState, useEffect } from 'react';
import { Camera,Utensils } from "lucide-react";
import GlareHover from './GlareHover/GlareHover';

const MacroStat = ({ label, value, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) ${delay}ms`
    }}>
      <p style={{ 
        margin: '0 0 8px 0', 
        fontSize: '14px', 
        color: '#555',
        fontWeight: '500'
      }}>
        {label}: <span style={{ fontWeight: '700', color: '#333' }}>{`${value}%`}</span>
      </p>
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        height: '8px', 
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div 
          style={{ 
            width: `${value}%`, 
            height: '100%', 
            background: 'linear-gradient(90deg, #7300ff, #8f4dff, #ab7aff)',
            borderRadius: '12px',
            transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 1s cubic-bezier(0.4, 0.0, 0.2, 1) 0.3s',
            position: 'relative',
            overflow: 'hidden'
          }} 
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            animation: isVisible && value > 0 ? 'shimmer 2s infinite' : 'none'
          }} />
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

const FoodTracker = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pulseButtons, setPulseButtons] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const pulseTimer = setInterval(() => {
      setPulseButtons(true);
      setTimeout(() => setPulseButtons(false), 600);
    }, 4000);
    
    return () => clearInterval(pulseTimer);
  }, []);

  const calorieGoal = 1450;
  const macros = {
    protein: 75,
    fats: 45,
    carbs: 60,
    fibre: 30
  };

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px',
      maxWidth: '350px',
      position: 'relative'
    }}>
      
      <h2 style={{ 
        fontSize: '22px', 
        fontWeight: 'bold', 
        margin: '0 0 24px 0',
        color: '#ffffff',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)'
      }}>
        Your Trackers
      </h2>

      {/* Track Food Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '28px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) 0.2s'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <GlareHover
              width="50px"
              height="50px"
              background="#060010" // Add a background color to make the container visible
              borderRadius="15px"    // Adjusted for a more circular look
              borderColor="#444"    // Added a subtle border
              glareColor="#ffffff"   // Corrected to a standard 6-digit hex
              >
              <Utensils color="#7300ff" size={24} />
          </GlareHover>
          <div>
            <p style={{ 
              margin: 0, 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#888',
              transform: 'translateY(0)',
              transition: 'all 0.3s ease'
            }}>
              Track Food
            </p>
            <p style={{ 
              margin: '2px 0 0 0', 
              fontSize: '14px', 
              color: '#888',
              opacity: 0.8
            }}>
              Eat {calorieGoal} Cal
            </p>
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px'
        }}>
          <GlareHover
              width="50px"
              height="50px"
              background="#060010" // Add a background color to make the container visible
              borderRadius="15px"    // Adjusted for a more circular look
              borderColor="#444"    // Added a subtle border
              glareColor="#ffffff"   // Corrected to a standard 6-digit hex
              >
              <button style={{
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            color: '#888',
            fontSize: '24px',
            transform: pulseButtons ? 'scale(1.2)' : 'scale(1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
            borderRadius: '12px',
            padding: '8px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1) rotate(5deg)';
            e.target.style.color = '#667eea';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) rotate(0deg)';
            e.target.style.color = '#888';
          }}>
            <Camera color='#7300ffff'/>
          </button>
          </GlareHover>
          <button style={{
            width: '36px', 
            height: '36px', 
            borderRadius: '50%', 
            border: 'none',
            background: 'linear-gradient(135deg, #7300ff, #8f4dff)',
            color: 'white', 
            cursor: 'pointer',
            fontSize: '18px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontWeight: 'bold',
            transform: pulseButtons ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(115, 0, 255, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.background = 'linear-gradient(135deg, #8f4dff, #7300ff)';
            e.target.style.boxShadow = '0 6px 20px rgba(115, 0, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.background = 'linear-gradient(135deg, #7300ff, #8f4dff)';
            e.target.style.boxShadow = '0 4px 15px rgba(115, 0, 255, 0.3)';
          }}>
            +
          </button>
        </div>
      </div>
      
      {/* Macros Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px 28px',
        marginBottom: '32px'
      }}>
        <MacroStat label="Protein" value={macros.protein} delay={600} />
        <MacroStat label="Fats" value={macros.fats} delay={700} />
        <MacroStat label="Carbs" value={macros.carbs} delay={800} />
        <MacroStat label="Fibre" value={macros.fibre} delay={900} />
      </div>

      {/* Creative Suggest Ideas Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) 1.2s'
      }}>
        <button style={{
          background: 'linear-gradient(135deg, #7300ff 0%, #8f4dff 50%, #ab7aff 100%)',
          border: 'none',
          borderRadius: '25px',
          padding: '12px 24px',
          color: 'white',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 25px rgba(115, 0, 255, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 12px 35px rgba(115, 0, 255, 0.5)';
          e.target.style.background = 'linear-gradient(135deg, #8f4dff 0%, #ab7aff 50%, #c084fc 100%)';
          // Trigger shimmer effect on hover
          const shimmer = e.target.querySelector('.shimmer-effect');
          if (shimmer) {
            shimmer.style.animation = 'buttonShimmer 0.8s ease-out';
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 25px rgba(115, 0, 255, 0.4)';
          e.target.style.background = 'linear-gradient(135deg, #7300ff 0%, #8f4dff 50%, #ab7aff 100%)';
          // Stop shimmer effect
          const shimmer = e.target.querySelector('.shimmer-effect');
          if (shimmer) {
            shimmer.style.animation = 'none';
          }
        }}
        onClick={(e) => {
          // Create ripple effect
          const ripple = document.createElement('span');
          const rect = e.target.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;
          
          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = x + 'px';
          ripple.style.top = y + 'px';
          ripple.style.position = 'absolute';
          ripple.style.borderRadius = '50%';
          ripple.style.background = 'rgba(255, 255, 255, 0.6)';
          ripple.style.transform = 'scale(0)';
          ripple.style.animation = 'ripple 0.6s linear';
          ripple.style.pointerEvents = 'none';
          
          e.target.appendChild(ripple);
          
          setTimeout(() => {
            ripple.remove();
          }, 600);
        }}>
          <span>💡</span>
          Suggest Some Ideas
          <div className="shimmer-effect" style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            animation: 'none'
          }} />
        </button>
      </div>

      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        @keyframes buttonShimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default FoodTracker;