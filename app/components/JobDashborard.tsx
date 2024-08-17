// File: /components/JobDashboard.tsx
"use client";
import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import Link from 'next/link';

// Define TypeScript interface for job data
interface Job {
  id:string;
  title: string;
  orgName: string;
  description: string;
  location: string;
  image: string;
  logoUrl: string;
  about: {
    location: string;
  };
}

// Define the type for the fetched data
type JobData = Job[];

const jobTags = ["in-person", "Education", "IT"];

const AllJobs = () => {
  const [data, setData] = useState<JobData>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://akil-backend.onrender.com/opportunities/search');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jobs=await response.json();
        setData(jobs.data);
        setIsLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map((job, index) => (
        <Link href={`/components/${job.id}`} key={job.id}>
            
        <JobCard 
          key={index}
          title={job.title}
          company={job.orgName}
          location={job.location}
          description={job.description}
          avatarUrl={job.logoUrl}
          tags={jobTags}
        />
      </Link>
      ))}
    </div>
  );
}

export default AllJobs;
