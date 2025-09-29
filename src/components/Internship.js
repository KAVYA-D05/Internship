// src/components/Internship.js
import React from "react";
import Layout from "./Layout";

const internships = [
  // 20 internships
  {
    title: "Software Development Internship",
    company: "Tech Solutions Pvt Ltd",
    description: "Build and maintain web applications using modern technologies.",
    role: "Frontend & Backend Development",
    experience: "0-1 year",
    eligibility: "B.Tech/BE in CS/IT",
    stipend: "₹10,000/month",
    link: "https://www.techsolutions.com/internship/software-dev"
  },
  {
    title: "Digital Marketing Internship",
    company: "Creative Minds",
    description: "Assist in social media campaigns and marketing analytics.",
    role: "Content Creation & Analytics",
    experience: "0-1 year",
    eligibility: "BBA/BBM/MBA Marketing",
    stipend: "₹8,000/month",
    link: "https://www.creativeminds.com/internship/digital-marketing"
  },
  {
    title: "Data Analysis Internship",
    company: "DataCorp",
    description: "Analyze datasets to provide insights and create reports.",
    role: "Data Collection & Analysis",
    experience: "0-1 year",
    eligibility: "B.Sc/M.Sc Statistics, Math, CS",
    stipend: "₹12,000/month",
    link: "https://www.datacorp.com/internship/data-analysis"
  },
  {
    title: "UI/UX Design Internship",
    company: "DesignStudio",
    description: "Design interactive user interfaces for web and mobile apps.",
    role: "UI/UX Designer",
    experience: "0-1 year",
    eligibility: "B.Des/Graphic Design",
    stipend: "₹9,000/month",
    link: "https://www.designstudio.com/internship/ui-ux"
  },
  {
    title: "Agriculture Research Internship",
    company: "AgriTech Labs",
    description: "Assist in research on crop productivity, pest management, and soil health.",
    role: "Research & Field Work",
    experience: "0-1 year",
    eligibility: "B.Sc/M.Sc Agriculture",
    stipend: "₹8,500/month",
    link: "https://www.agritechlabs.com/internship/agriculture-research"
  },
  {
    title: "Machine Learning Internship",
    company: "AI Innovations",
    description: "Develop and train machine learning models for real datasets.",
    role: "ML Model Development",
    experience: "0-1 year",
    eligibility: "B.Tech/M.Tech CS/AI",
    stipend: "₹15,000/month",
    link: "https://www.aiinnovations.com/internship/ml"
  },
  {
    title: "Finance Internship",
    company: "FinServe Ltd",
    description: "Assist in financial analysis, budgeting, and investment research.",
    role: "Financial Analysis",
    experience: "0-1 year",
    eligibility: "B.Com/M.Com/Finance MBA",
    stipend: "₹7,500/month",
    link: "https://www.finserve.com/internship/finance"
  },
  {
    title: "Content Writing Internship",
    company: "WriteNow Media",
    description: "Create engaging articles, blog posts, and social media content.",
    role: "Content Creation",
    experience: "0-1 year",
    eligibility: "Graduates in English/Journalism/Communications",
    stipend: "₹6,000/month",
    link: "https://www.writenow.com/internship/content-writing"
  },
  {
    title: "Human Resources Internship",
    company: "HR Solutions",
    description: "Assist in recruitment, employee engagement, and training programs.",
    role: "HR Operations",
    experience: "0-1 year",
    eligibility: "BBA/MBA HR",
    stipend: "₹7,000/month",
    link: "https://www.hrsolutions.com/internship/hr"
  },
  {
    title: "Web Development Internship",
    company: "CodeCrafters",
    description: "Build and maintain responsive websites and web applications.",
    role: "Full Stack Development",
    experience: "0-1 year",
    eligibility: "B.Tech/BE CS/IT",
    stipend: "₹10,000/month",
    link: "https://www.codecrafters.com/internship/web-dev"
  },
  {
    title: "Blockchain Development Internship",
    company: "BlockWorks",
    description: "Develop decentralized applications and smart contracts.",
    role: "Blockchain Developer",
    experience: "0-1 year",
    eligibility: "B.Tech/BE CS/IT",
    stipend: "₹12,000/month",
    link: "https://www.blockworks.com/internship/blockchain"
  },
  {
    title: "Cybersecurity Internship",
    company: "SecureTech",
    description: "Identify and mitigate security vulnerabilities in systems.",
    role: "Security Analyst",
    experience: "0-1 year",
    eligibility: "B.Tech/BE CS/IT",
    stipend: "₹14,000/month",
    link: "https://www.securetech.com/internship/cybersecurity"
  },
  {
    title: "Cloud Computing Internship",
    company: "Cloudify Solutions",
    description: "Deploy and manage scalable applications on cloud platforms.",
    role: "Cloud Engineer",
    experience: "0-1 year",
    eligibility: "B.Tech/M.Tech CS/IT",
    stipend: "₹11,000/month",
    link: "https://www.cloudify.com/internship/cloud"
  },
  {
    title: "Graphic Design Internship",
    company: "Visual Arts Studio",
    description: "Create creative designs for branding and marketing.",
    role: "Graphic Designer",
    experience: "0-1 year",
    eligibility: "B.Des/Graphic Design",
    stipend: "₹8,000/month",
    link: "https://www.visualarts.com/internship/graphic-design"
  },
  {
    title: "IoT Internship",
    company: "SmartIoT Labs",
    description: "Develop IoT solutions integrating sensors, cloud, and mobile apps.",
    role: "IoT Developer",
    experience: "0-1 year",
    eligibility: "B.Tech Electronics/CS",
    stipend: "₹13,000/month",
    link: "https://www.smartiot.com/internship/iot"
  },
  {
    title: "Mobile App Development Internship",
    company: "AppMakers",
    description: "Develop Android and iOS mobile applications.",
    role: "Mobile Developer",
    experience: "0-1 year",
    eligibility: "B.Tech/BE CS/IT",
    stipend: "₹12,000/month",
    link: "https://www.appmakers.com/internship/mobile"
  },
  {
    title: "SEO Internship",
    company: "RankBoosters",
    description: "Optimize websites for search engines and improve visibility.",
    role: "SEO Analyst",
    experience: "0-1 year",
    eligibility: "BBA/MBA Marketing",
    stipend: "₹7,500/month",
    link: "https://www.rankboosters.com/internship/seo"
  },
  {
    title: "Video Editing Internship",
    company: "MediaWorks",
    description: "Edit promotional videos, tutorials, and social media content.",
    role: "Video Editor",
    experience: "0-1 year",
    eligibility: "Graduates in Media/Film",
    stipend: "₹8,500/month",
    link: "https://www.mediaworks.com/internship/video-editing"
  },
  {
    title: "Business Development Internship",
    company: "BizGrow Solutions",
    description: "Assist in client acquisition, market research, and sales strategy.",
    role: "Business Development",
    experience: "0-1 year",
    eligibility: "BBA/MBA",
    stipend: "₹9,000/month",
    link: "https://www.bizgrow.com/internship/bd"
  },
  {
    title: "AI Research Internship",
    company: "NextGen AI",
    description: "Work on AI projects including NLP, computer vision, and robotics.",
    role: "AI Researcher",
    experience: "0-1 year",
    eligibility: "B.Tech/M.Tech CS/AI",
    stipend: "₹15,000/month",
    link: "https://www.nextgenai.com/internship/ai"
  }
];

const Internship = () => {
  return (
    <Layout>
      <div className="internship-container">
        <h1>Available Internships</h1>
        <div className="internships-grid">
          {internships.map((intern, idx) => (
            <div key={idx} className="intern-card">
              <h3>{intern.title}</h3>
              <p><strong>Company:</strong> {intern.company}</p>
              <p><strong>Description:</strong> {intern.description}</p>
              <p><strong>Role:</strong> {intern.role}</p>
              <p><strong>Experience:</strong> {intern.experience}</p>
              <p><strong>Eligibility:</strong> {intern.eligibility}</p>
              <p><strong>Stipend:</strong> {intern.stipend}</p>
              <a href={intern.link} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .internship-container { width: 90%; margin: 20px auto; font-family: Arial, sans-serif; }
        h1 { text-align: center; color: #1e3c72; margin-bottom: 30px; }
        .internships-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .intern-card { background: linear-gradient(145deg, #ffffff, #f0f4f8); padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; }
        .intern-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        h3 { color: #0d1f3c; margin-bottom: 8px; }
        p { margin: 4px 0; line-height: 1.5; color: #333; }
        a { display: inline-block; margin-top: 10px; padding: 10px 18px; background-color: #1e3c72; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; transition: all 0.3s ease; }
        a:hover { background-color: #16325c; transform: scale(1.05); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
      `}</style>
    </Layout>
  );
};

export default Internship;
