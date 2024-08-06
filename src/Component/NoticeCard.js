import React from 'react';
import { Card } from 'react-bootstrap';

const NoticeCard = ({ title, description, image, date }) => {
    return (
        <Card className="mb-4">
            <Card.Img 
                variant="top" 
                src={image} 
                alt="Announcement" 
                onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} 
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                {new Date(date).toLocaleDateString()}
            </Card.Footer>
        </Card>
    );
};

export default NoticeCard;
