// File: /components/JobDashboard.tsx
import React, { useEffect } from 'react';
import JobCard from './JobCard';
import jobs from './jobs.json';
const jobTags = [ "in-person", "Education", "IT"];

const JobDashboard: React.FC = () => {
  return (
    <div>
      {jobs.job_postings.map((job, index) => (
        <JobCard 
          key={index}
          title={job.title}
          company={job.company}
          location={job.about.location}
          description={job.description}
          avatarUrl={job.image}
          tags = {jobTags}
        />
      ))}
    </div>
  );
};

export default JobDashboard;

