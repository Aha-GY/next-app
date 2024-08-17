// File: /components/JobCard.tsx
import React from 'react';
import Image from 'next/image';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  description?: string;
  avatarUrl?: string;
  tags: string[];
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, description = 'No description available', avatarUrl = '', tags }) => {
  return (
    <div className="flex items-center justify-center mt-4 mb-4">
      <div className="border-2 border-solid max-w-[1100px] rounded-[12px] h-[45vh] min-h-[150px] max-h-[240px] p-4 bg-white m-4 mx-8">
        <div className="flex">
          {avatarUrl ? (
            <Image src={avatarUrl} alt="logo" width={60} height={60} className="flex w-[60px] h-[60px] rounded-full mr-4" />
          ) : (
            <div className="flex w-[60px] h-[60px] rounded-full mr-4 bg-gray-200"></div>
          )}
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-lg m-0 text-gray-800 text-left">{title}</h1>
            <div className="flex text-lg m-0 text-gray-800 text-center">
              <p className="text-gray-500 my-1 text-center">{company}</p>
              <p className="text-gray-500 my-1 text-center">{location}</p>
            </div>
          </div>
        </div>
        <p className="text-gray-600 my-2 ml-[30px] text-left">{description}</p>
        <div className="text-left ml-6 mb-30px">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block px-2 py-1 rounded-full mr-[14px] text-xs bg-white border border-300 ${
                tag.toLowerCase() === 'in-person' ? 'bg-[#eff3f0] text-green-700 border-green-500' :
                tag.toLowerCase() === 'education' ? 'bg-[#f1f0ef] text-[#ff7f00] border-[#ff7f00]' :
                tag.toLowerCase() === 'it' ? 'bg-[#e0e0ff] text-blue-500 border-blue-500 w-[55px] text-center' : ''
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
