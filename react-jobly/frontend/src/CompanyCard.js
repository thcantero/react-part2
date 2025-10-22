import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ company }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/companies/${company.handle}`}>
            {company.name}
          </Link>
        </h5>
        <p className="card-text">{company.description}</p>
        {company.logoUrl && (
          <img 
            src={company.logoUrl} 
            alt={company.name} 
            className="float-end" 
            style={{ maxHeight: '50px' }}
          />
        )}
      </div>
    </div>
  );
}

export default CompanyCard;