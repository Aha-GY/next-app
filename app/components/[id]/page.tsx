// File: /pages/jobs/[id].tsx
"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DetailCard from '../../components/DetailCard';
import { useParams } from 'next/navigation';

const SpecificJob = () => {
  // const router = useRouter();
  // const { id } = useRouter().query;
  const id=useParams().id;

  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log(data)
  useEffect(() => {
    if (id) {
      const fetchJobData = async () => {
        try {
          const response = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch job data');
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchJobData();
    }
  }, [id]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h2>Error loading job details: {error}</h2>;

  return (
    <div>
      <DetailCard
        description={data.data.description}
        responsibilities={data.data.responsibilities}
        idealCandidate={data.data.idealCandidate}
        whenAndWhere={data.data.whenAndWhere}
        postedOn={data.data.postedOn}
        deadline={data.data.deadline}
        location={data.data.location}
        startDate={data.data.startDate}
        endDate={data.data.endDate}
        categories={data.data.categories}
        requiredSkills={data.data.requiredSkills}
        datePosted={data.data.datePosted}
      />
    </div>
  );
};

export default SpecificJob;
