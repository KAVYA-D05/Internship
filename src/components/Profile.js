import React, { useState } from "react";
import Layout from "./Layout";

const Profile = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : { name: "", email: "", contact: "" };

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [contact, setContact] = useState(user.contact || "");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [certifications, setCertifications] = useState([]);
  const [message, setMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      setMessage("Please fill in all required fields!");
      return;
    }
    const updatedUser = { name, email, contact };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setMessage("Profile updated successfully!");
  };

  const handleCertificationUpload = (e) => {
    setCertifications([...e.target.files]);
  };

  return (
    <Layout>
      <div className="profile-container">
        <h1>Profile Page</h1>
        {message && <p className="success-msg">{message}</p>}

        <form onSubmit={handleSave}>
          <label>Name: *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email: *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Contact Number: *</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <label>Profile Photo:</label>
          <input type="file" accept="image/*" onChange={(e) => setProfilePhoto(e.target.files[0])} />

          <label>Resume (PDF):</label>
          <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />

          <label>Certifications:</label>
          <input type="file" multiple accept=".pdf,.jpg,.png" onChange={handleCertificationUpload} />

          <button type="submit">Save Profile</button>
        </form>

        {profilePhoto && (
          <div className="preview">
            <h3>Profile Photo Preview:</h3>
            <img src={URL.createObjectURL(profilePhoto)} alt="Profile" />
          </div>
        )}

        {resume && <p>Resume uploaded: {resume.name}</p>}

        {certifications.length > 0 && (
          <div>
            <h3>Certifications:</h3>
            <ul>
              {certifications.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>{`
        .profile-container {
          width: 85%;
          margin: 20px auto;
          padding: 20px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
          text-align: left;
        }
        label {
          display: block;
          margin-top: 15px;
          font-weight: bold;
        }
        input {
          display: block;
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #1e3c72;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover {
          background-color: #16325c;
        }
        .preview img {
          margin-top: 10px;
          max-width: 150px;
          border-radius: 8px;
        }
        .success-msg {
          color: green;
          margin-bottom: 10px;
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
};

export default Profile;
