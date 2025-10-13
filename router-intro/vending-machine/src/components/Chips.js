import React from "react";
import { Link } from "react-router-dom";

/**
 * Chips snack component
 * Displays chips product information with navigation back to main machine
 */
function Chips() {
  return (
    <div className="Chips" style={containerStyles}>
      <div style={contentStyles}>
        <h1 style={titleStyles}>🥨 Crunchy Chips</h1>
        
        <div style={productStyles}>
          <div style={imagePlaceholderStyles}>
            <span style={emojiStyles}>🥨</span>
          </div>
          
          <div style={detailsStyles}>
            <h2 style={nameStyles}>Sea Salt Potato Chips</h2>
            <p style={descStyles}>
              Crispy, golden potato chips lightly seasoned with sea salt. 
              The perfect crunchy snack for any time of day.
            </p>
            
            <div style={infoGridStyles}>
              <div style={infoItemStyles}>
                <strong>Price:</strong> $2.00
              </div>
              <div style={infoItemStyles}>
                <strong>Size:</strong> Family Bag
              </div>
              <div style={infoItemStyles}>
                <strong>Calories:</strong> 160 per serving
              </div>
              <div style={infoItemStyles}>
                <strong>Flavor:</strong> Sea Salt
              </div>
            </div>
            
            <div style={actionStyles}>
              <p style={enjoyStyles}>Enjoy your crunchy chips! 🍟</p>
              <Link to="/" style={backButtonStyles}>
                ← Back to Vending Machine
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles (similar structure to Water but with different colors)
const containerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem'
};

const contentStyles = {
  textAlign: 'center'
};

const titleStyles = {
  color: '#e67e22',
  fontSize: '2.5rem',
  marginBottom: '2rem'
};

const productStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'left'
};

const imagePlaceholderStyles = {
  width: '200px',
  height: '200px',
  backgroundColor: '#fef9e7',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

const emojiStyles = {
  fontSize: '6rem'
};

const detailsStyles = {
  flex: 1
};

const nameStyles = {
  color: '#2c3e50',
  fontSize: '2rem',
  margin: '0 0 1rem 0'
};

const descStyles = {
  color: '#7f8c8d',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  marginBottom: '2rem'
};

const infoGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  marginBottom: '2rem'
};

const infoItemStyles = {
  padding: '0.5rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '4px'
};

const actionStyles = {
  textAlign: 'center'
};

const enjoyStyles = {
  fontSize: '1.2rem',
  color: '#27ae60',
  marginBottom: '1.5rem'
};

const backButtonStyles = {
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#e67e22',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  transition: 'background-color 0.3s ease'
};

// Add hover effect
const style = document.createElement('style');
style.textContent = `
  .Chips a:hover {
    background-color: #d35400;
  }
`;
document.head.appendChild(style);

export default Chips;