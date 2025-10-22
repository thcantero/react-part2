import React, { useState } from 'react';
import { useJobly } from './JoblyContext';

function JobCard({ job }) {
  const { currentUser, hasAppliedToJob, applyToJob } = useJobly();
  const [applied, setApplied] = useState();

  React.useEffect(() => {
    setApplied(hasAppliedToJob(job.id));
  }, [job.id, hasAppliedToJob]);

  async function handleApply() {
    if (currentUser && !applied) {
      applyToJob(job.id);
      setApplied(true);
    }
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">
          <strong>Company:</strong> {job.companyName || job.companyHandle}
        </p>
        {job.salary && (
          <p className="card-text">
            <strong>Salary:</strong> ${job.salary.toLocaleString()}
          </p>
        )}
        {job.equity !== undefined && job.equity !== null && (
          <p className="card-text">
            <strong>Equity:</strong> {job.equity}
          </p>
        )}
        {currentUser && (
          <button
            className={`btn ${applied ? 'btn-success' : 'btn-primary'}`}
            onClick={handleApply}
            disabled={applied}
          >
            {applied ? 'Applied' : 'Apply'}
          </button>
        )}
      </div>
    </div>
  );
}

export default JobCard;