import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/placeHolderstyle.css'; // Ensure your CSS is properly imported
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PLaceHolderCard = () => {
  return (
    <div>
      <Row noGutters>
        <Col className="p-0">
          <Card className="placeholder-card">
            <div className="placeholder-image"></div>
            <Card.Body>
              <div className="placeholder-title mb-1"></div>
              <div className="placeholder-text mb-2"></div>
              <div className="d-flex justify-content-end">
                <Button variant='white' className='circle-button border' size="sm" disabled>
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PLaceHolderCard;
