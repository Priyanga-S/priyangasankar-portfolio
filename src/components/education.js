import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelors of Biomedical Engineering",
      institution: "KPR Institute of Engineering and Technology",
      duration: "09/10/2020 - 11/05/2024",
      city: "Coimbatore",
      country: "India",
      website: "https://www.kpriet.ac.in/",
      fieldOfStudy: "BioMedical",
      finalGrade: "8.48",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kongu Vellalar Matriculation Higher Secondary School",
      duration: "06/06/2019 - 24/03/2020",
      city: "Coimbatore",
      country: "India",
      website: "https://kongumhss.in/about-kongu/",
      finalGrade: "7.9",
    },
    {
      degree: "Secondary Education",
      institution: "Kongu Vellalar Matriculation Higher Secondary School",
      duration: "06/06/2017 - 20/04/2018",
      city: "Coimbatore",
      country: "India",
      website: "https://kongumhss.in/about-kongu/",
      finalGrade: "9.5",
    },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education and Training</h2>
        <div className="education-list">
          {educationData.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-content">
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-duration">{item.duration}</p>
                <p className="education-location">
                  {item.city}, {item.country}
                </p>
                <p className="education-website">
                  <a href={item.website} target="_blank" rel="noopener noreferrer">
                    {item.website}
                  </a>
                </p>
                {item.fieldOfStudy && (
                  <p className="education-field">Field(s) of study: {item.fieldOfStudy}</p>
                )}
                <p className="education-grade">Final grade: {item.finalGrade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
