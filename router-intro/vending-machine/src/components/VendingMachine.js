import React from "react";
import { Link } from "react-router-dom";

/**
 * Main vending machine component displaying available snacks
 * Shows a list of clickable snacks that navigate to their detail pages
 */
function VendingMachine() {
  const snacks = [
    { 
      id: 1, 
      name: "Water", 
      path: "/water", 
      description: "Refreshing bottled water",
      price: "$1.50"
    },
    { 
      id: 2, 
      name: "Chips", 
      path: "/chips", 
      description: "Crunchy potato chips",
      price: "$2.00"
    },
    { 
      id: 3, 
      name: "Candy", 
      path: "/candy", 
      description: "Sweet chocolate candy",
      price: "$1.75"
    }
  ];

  return (
    <div className="VendingMachine" style={containerStyles}>
      <header style={headerStyles}>
        <h1 style={titleStyles}>Welcome to the Vending Machine!</h1>
        <p style={subtitleStyles}>Choose your favorite snack below:</p>
      </header>
      
      <div style={snacksGridStyles}>
        {snacks.map(snack => (
          <Link 
            key={snack.id} 
            to={snack.path} 
            style={snackCardStyles}
          >
            <div style={cardContentStyles}>
              <h3 style={snackNameStyles}>{snack.name}</h3>
              <p style={snackDescStyles}>{snack.description}</p>
              <p style={priceStyles}>{snack.price}</p>
              <div style={clickHintStyles}>Click to select →</div>
            </div>
          </Link>
        ))}
      </div>
      
      <footer style={footerStyles}>
        <p>Insert coins and make your selection!</p>
      </footer>
    </div>
  );
}

// Styles
const containerStyles = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center'
};

const headerStyles = {
  marginBottom: '3rem'
};

const titleStyles = {
  color: '#2c3e50',
  fontSize: '2.5rem',
  marginBottom: '1rem'
};

const subtitleStyles = {
  color: '#7f8c8d',
  fontSize: '1.2rem'
};

const snacksGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  marginBottom: '3rem'
};

const snackCardStyles = {
  backgroundColor: '#ffffff',
  border: '2px solid #bdc3c7',
  borderRadius: '12px',
  padding: '1.5rem',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'block'
};

const cardContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
};

const snackNameStyles = {
  color: '#2c3e50',
  fontSize: '1.5rem',
  margin: '0 0 1rem 0'
};

const snackDescStyles = {
  color: '#7f8c8d',
  flexGrow: 1,
  margin: '0 0 1rem 0'
};

const priceStyles = {
  color: '#27ae60',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  margin: '0 0 1rem 0'
};

const clickHintStyles = {
  color: '#3498db',
  fontSize: '0.9rem',
  fontStyle: 'italic'
};

const footerStyles = {
  borderTop: '1px solid #ecf0f1',
  paddingTop: '2rem',
  color: '#95a5a6'
};

// Add hover effects via CSS
const style = document.createElement('style');
style.textContent = `
  .VendingMachine a:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    border-color: #3498db;
  }
  
  .NavBar a.active {
    background-color: #3498db;
    font-weight: bold;
  }
  
  .NavBar a:hover:not(.active) {
    background-color: #34495e;
  }
`;
document.head.appendChild(style);

export default VendingMachine;