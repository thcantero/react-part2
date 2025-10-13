import React from "react";
import { Link } from "react-router-dom";

/**
 * Candy snack component
 * Displays candy product information with navigation back to main machine
 */
function Candy() {
  return (
    <div className="Candy" style={containerStyles}>
      <div style={contentStyles}>
        <h1 style={titleStyles}>🍫 Sweet Candy</h1>
        
        <div style={productStyles}>
          <div style={imagePlaceholderStyles}>
            <span style={emojiStyles}>🍫</span>
          </div>
          
          <div style={detailsStyles}>
            <h2 style={nameStyles}>Chocolate Candy Bar</h2>
            <p style={descStyles}>
              Rich, creamy milk chocolate with crispy cookie pieces. 
              A delightful treat that satisfies your sweet cravings instantly.
            </p>
            
            <div style={infoGridStyles}>
              <div style={infoItemStyles}>
                <strong>Price:</strong> $1.75
              </div>
              <div style={infoItemStyles}>
                <strong>Size:</strong> Standard Bar
              </div>
              <div style={infoItemStyles}>
                <strong>Calories:</strong> 210
              </div>
              <div style={infoItemStyles}>
                <strong>Type:</strong> Milk Chocolate
              </div>
            </div>
            
            <div style={actionStyles}>
              <p style={enjoyStyles}>Enjoy your sweet candy! 🍭</p>
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

// Styles (similar structure but with candy colors)
const containerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem'
};

const contentStyles = {
  textAlign: 'center'
};

const titleStyles = {
  color: '#8e44ad',
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
  backgroundColor: '#f4ecf7',
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
  backgroundColor: '#8e44ad',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  transition: 'background-color 0.3s ease'
};

// Add hover effect
const style = document.createElement('style');
style.textContent = `
  .Candy a:hover {
    background-color: #7d3c98;
  }
`;
document.head.appendChild(style);

export default Candy;