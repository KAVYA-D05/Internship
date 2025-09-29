// src/components/Search.js
import React, { useState } from "react";
import Layout from "./Layout";

// Sample internship data (you can import from Internship.js if modularized)
const internships = [
  { title: "Software Development Internship", company: "Tech Solutions Pvt Ltd" },
  { title: "Digital Marketing Internship", company: "Creative Minds" },
  { title: "Data Analysis Internship", company: "DataCorp" },
  { title: "UI/UX Design Internship", company: "DesignStudio" },
  { title: "Agriculture Research Internship", company: "AgriTech Labs" },
  { title: "Machine Learning Internship", company: "AI Innovations" },
  { title: "Finance Internship", company: "FinServe Ltd" },
  { title: "Content Writing Internship", company: "WriteNow Media" },
  { title: "Human Resources Internship", company: "HR Solutions" },
  { title: "Web Development Internship", company: "CodeCrafters" },
  { title: "Blockchain Development Internship", company: "BlockWorks" },
  { title: "Cybersecurity Internship", company: "SecureTech" },
  { title: "Cloud Computing Internship", company: "Cloudify Solutions" },
  { title: "Graphic Design Internship", company: "Visual Arts Studio" },
  { title: "IoT Internship", company: "SmartIoT Labs" },
  { title: "Mobile App Development Internship", company: "AppMakers" },
  { title: "SEO Internship", company: "RankBoosters" },
  { title: "Video Editing Internship", company: "MediaWorks" },
  { title: "Business Development Internship", company: "BizGrow Solutions" },
  { title: "AI Research Internship", company: "NextGen AI" },
];

const Search = () => {
  const [query, setQuery] = useState("");

  // Filter internships based on search query
  const filteredInternships = internships.filter(
    (intern) =>
      intern.title.toLowerCase().includes(query.toLowerCase()) ||
      intern.company.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <div className="search-container">
        <h1>Search Internships</h1>
        <input
          type="text"
          placeholder="Search by title or company..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="results-grid">
          {filteredInternships.length > 0 ? (
            filteredInternships.map((intern, idx) => (
              <div key={idx} className="intern-card">
                <h3>{intern.title}</h3>
                <p><strong>Company:</strong> {intern.company}</p>
                <a href={`https://www.example.com/internship/${intern.title.replace(/\s+/g, "-").toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </div>
            ))
          ) : (
            <p className="no-result">No internships found.</p>
          )}
        </div>
      </div>

      <style>{`
        .search-container { width: 90%; margin: 20px auto; font-family: Arial, sans-serif; }
        h1 { text-align: center; color: #1e3c72; margin-bottom: 20px; }
        input { width: 100%; padding: 12px 15px; border-radius: 8px; border: 1px solid #ccc; font-size: 16px; margin-bottom: 20px; }
        .results-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .intern-card { background: linear-gradient(145deg, #ffffff, #f0f4f8); padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; }
        .intern-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        h3 { color: #0d1f3c; margin-bottom: 8px; }
        p { margin: 4px 0; line-height: 1.5; color: #333; }
        a { display: inline-block; margin-top: 10px; padding: 10px 18px; background-color: #1e3c72; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; transition: all 0.3s ease; }
        a:hover { background-color: #16325c; transform: scale(1.05); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
        .no-result { text-align: center; color: #555; font-size: 16px; margin-top: 20px; }
      `}</style>
    </Layout>
  );
};

export default Search;
