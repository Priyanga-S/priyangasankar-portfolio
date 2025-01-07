import { Col, Row } from "react-bootstrap";

export const ProjectCard0 = ({ title, description, imgUrl, imgWidth, imgHeight, link }) => {
  return (
    <Row>
      <Col className="d-flex justify-content-center" size={20} sm={15} md={20}>
        <div className="proj-imgbx">
          <img
            src={imgUrl}
            alt={title}
            style={{
              width: imgWidth || 300,
              height: imgHeight || 350,
              
            }}
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            {link && (
              <a
                href={link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 15px',
                  backgroundColor: '#4caf50', // Green background
                  color: '#fff', // White text
                  textDecoration: 'none', // Remove underline
                  borderRadius: '5px', // Rounded corners
                  fontSize: '14px',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                }}
              >
                View Paper
              </a>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

