import React from 'react';
import camera from '../assets/image2vector.svg';

// This component holds one macro item (e.g., Protein)
const MacroStat = ({ label, value }) => (
  <div>
    <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#555' }}>
      {label}: <span style={{ fontWeight: '600' }}>{value}%</span>
    </p>
    <div style={{ 
      backgroundColor: '#f0f0f0', 
      height: '6px', 
      borderRadius: '3px',
      overflow: 'hidden'
    }}>
      <div style={{ 
        width: `${value}%`, 
        height: '100%', 
        backgroundColor: '#ccc' // Progress bar color
      }} />
    </div>
  </div>
);

const FoodTracker = () => {
  // You can replace this static data with props or state
  const calorieGoal = 1450;
  const macros = {
    protein: 0,
    fats: 0,
    carbs: 0,
    fibre: 0
  };

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px', // This padding creates the inner spacing
      maxWidth: '350px'
    }}>
      
      <h2 style={{ 
        fontSize: '22px', 
        fontWeight: 'bold', 
        margin: '0 0 20px 0',
        color: '#ffffffff'
      }}>
        Your Trackers
      </h2>

      {/* Track Food Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            width: '48px', height: '48px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#f0f0f0', fontSize: '24px'
          }}>
            🍴
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#888' }}>
              Track Food
            </p>
            <p style={{ margin: '2px 0 0 0', fontSize: '14px', color: '#888' }}>
              Eat {calorieGoal} Cal
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{
             background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px'
          }}>
          <img src={camera} alt="camera" className="logo" />
          </button>
           <button style={{
            width: '32px', height: '32px', borderRadius: '8px', border: '1.5px solid #ff9500',
            backgroundColor: 'transparent', color: '#ff9500', cursor: 'pointer',
            fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            +
          </button>
        </div>
      </div>
      
      {/* Macros Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px 24px'
      }}>
        <MacroStat label="Protein" value={macros.protein} />
        <MacroStat label="Fats" value={macros.fats} />
        <MacroStat label="Carbs" value={macros.carbs} />
        <MacroStat label="Fibre" value={macros.fibre} />
      </div>

    </div>
  );
};

export default FoodTracker;