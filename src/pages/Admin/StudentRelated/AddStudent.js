import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { addStudent } from '../../../store/features/students/StudentAction';
import { fetchFillieres } from "../../../store/features/filliere/FilliereAction";

const AjouterEtudiant = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fillieres = useSelector(state => state.fillieres.items);

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        username: '',
        password: '',
        img: '',
        age: '',
        email: '',
        telephone: '',
        sexe: '',
        filliereId: ''
    });

    useEffect(() => {
        if (fillieres.length === 0) {
            dispatch(fetchFillieres());
        }
    }, [dispatch, fillieres]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent({ etudiant: formData, filliereId: formData.filliereId })).then(() => {
            navigate('/admindashbord/showstudent');  // Redirect to the dashboard after adding the student
        });
    };

    return (
        <>
            <h1>Ajouter Étudiant</h1>
            <Form onSubmit={handleSubmit} className="form-inline">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formNom" className="mr-2">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPrenom" className="mr-2">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Prénom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formUsername" className="mr-2">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPassword" className="mr-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formImg" className="mr-2">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Image"
                            name="img"
                            value={formData.img}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formAge" className="mr-2">
                        <Form.Label>Âge</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Âge"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail" className="mr-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formTelephone" className="mr-2">
                        <Form.Label>Téléphone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Téléphone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formSexe" className="mr-2">
                        <Form.Label>Sexe</Form.Label>
                        <Form.Control
                            as="select"
                            name="sexe"
                            value={formData.sexe}
                            onChange={handleChange}
                            required
                        >
                            <option value="M">Masculin</option>
                            <option value="F">Féminin</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formFilliere" className="mr-2">
                        <Form.Label>Filière</Form.Label>
                        <Form.Control
                            as="select"
                            name="filliereId"
                            value={formData.filliereId}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Filiere</option>
                            {fillieres.map(filliere => (
                                <option key={filliere.idFil} value={filliere.idFil}>{filliere.nameFilliere}</option>
                            ))}
                        </Form.Control>
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

export default AjouterEtudiant;
