import { Col, Row } from "react-bootstrap";

export const ProjectCard0 = ({ title, description, imgUrl, imgWidth, imgHeight }) => {
  return (
    <Row>
      <Col className="d-flex justify-content-center" size={12} sm={20} md={15}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} style={{ width: 400, height: 350, marginRight: '5px' }} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        
      </Col>
    </Row>
  )
}
