import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Testimonial from './pages/Testimonial';
import Discover from './pages/Discover';
import Footer from './components/Footer';
import Form from './components/Form';
import ThankYou from './pages/ThankYou';
import Data from './pages/Data';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  
  const addEntry = (entry) => {
    const normalized = {
      firstName: entry.firstName || "",
      lastName: entry.lastName || "",
      gender: entry.gender || "",
      language: Array.isArray(entry.language)
        ? entry.language
        : entry.language ? [entry.language] : [],
      email: entry.email || "",
    };

    setSubmittedData((prev) => [...prev, normalized]);
  };

  return (
    <>
      <Navbar setShowForm={setShowForm} />

      <Home setShowForm={setShowForm} />
      <Features />
      <Testimonial />
      <Discover setShowForm={setShowForm}/>

      {submittedData.length > 0 && (
        <Data data={submittedData} />
      )}

      <Footer />

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <Form
            closeForm={() => setShowForm(false)}
            openThankYou={() => setShowThankYou(true)}
            addEntry={addEntry} 
          />
        </div>
      )}

      {showThankYou && (
        <ThankYou onClose={() => setShowThankYou(false)} />
      )}
    </>
  );
};

export default App;
