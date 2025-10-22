import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import JobCard from './JobCard';

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCompany() {
      try {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
      } catch (err) {
        console.error("Error loading company:", err);
      } finally {
        setLoading(false);
      }
    }
    getCompany();
  }, [handle]);

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (!company) {
    return <div className="container mt-5">Company not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{company.name}</h2>
              <p className="card-text">{company.description}</p>
              <p>
                <strong>Employees:</strong> {company.numEmployees}
              </p>
              {company.logoUrl && (
                <img 
                  src={company.logoUrl} 
                  alt={company.name} 
                  className="img-fluid mb-3" 
                />
              )}
            </div>
          </div>

          <h3 className="mt-4">Jobs</h3>
          {company.jobs.length === 0 ? (
            <p>No jobs available.</p>
          ) : (
            company.jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;