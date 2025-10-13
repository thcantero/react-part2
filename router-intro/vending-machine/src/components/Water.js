import React from "react";
import { Link } from "react-router-dom";

/**
 * Water snack component
 * Displays water product information with navigation back to main machine
 */
function Water() {
  return (
    <div className="Water" style={containerStyles}>
      <div style={contentStyles}>
        <h1 style={titleStyles}>💧 Refreshing Water</h1>
        
        <div style={productStyles}>
          <div style={imagePlaceholderStyles}>
            <span style={emojiStyles}>💧</span>
          </div>
          
          <div style={detailsStyles}>
            <h2 style={nameStyles}>Pure Mountain Water</h2>
            <p style={descStyles}>
              Crisp, clean, and refreshing bottled water sourced from natural springs. 
              Perfect for hydration anytime, anywhere.
            </p>
            
            <div style={infoGridStyles}>
              <div style={infoItemStyles}>
                <strong>Price:</strong> $1.50
              </div>
              <div style={infoItemStyles}>
                <strong>Size:</strong> 500ml
              </div>
              <div style={infoItemStyles}>
                <strong>Calories:</strong> 0
              </div>
              <div style={infoItemStyles}>
                <strong>Type:</strong> Still
              </div>
            </div>
            
            <div style={actionStyles}>
              <p style={enjoyStyles}>Enjoy your refreshing water! 🚰</p>
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

// Styles
const containerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem'
};

const contentStyles = {
  textAlign: 'center'
};

const titleStyles = {
  color: '#3498db',
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
  backgroundColor: '#ebf5fb',
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
  backgroundColor: '#3498db',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  transition: 'background-color 0.3s ease'
};

// Add hover effect
const style = document.createElement('style');
style.textContent = `
  .Water a:hover {
    background-color: #2980b9;
  }
`;
document.head.appendChild(style);

export default Water;