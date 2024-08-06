import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { addNotice } from '../../../store/features/annonces/AnnonceAction';

const AddNotice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        titre: '',
        description: '',
        image: null,
        dateEvent: new Date().toISOString().split('T')[0]
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNotice({ annonce: formData })).then(() => {
            navigate('/admindashbord/shownotice');
        });
    };

    return (
        <>
            <h1>Ajouter Annonce</h1>
            <Form onSubmit={handleSubmit} className="form-inline" encType="multipart/form-data">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formTitle" className="mr-2">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Titre"
                            name="titre"
                            value={formData.titre}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formDescription" className="mr-2">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formImage" className="mr-2">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Row>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Ajouter</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
};

export default AddNotice;
