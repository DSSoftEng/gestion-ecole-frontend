import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { updateTeacher } from '../../../store/features/teachers/TeacherAction';
import { fetchFillieres } from "../../../store/features/filliere/FilliereAction";

const UpdateTeacher = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fillieres = useSelector(state => state.fillieres.items);
    const teacher = useSelector(state => state.teachers.items.find(prof => prof.id === parseInt(id)));

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
        if (teacher) {
            setFormData({
                nom: teacher.nom,
                prenom: teacher.prenom,
                username: teacher.username,
                password: teacher.password,
                img: teacher.img,
                age: teacher.age,
                email: teacher.email,
                telephone: teacher.telephone,
                sexe: teacher.sexe,
                filliereId: teacher.filliere.idFil
            });
        } else {
            // dispatch(fetchteacherById(id)); // Décommentez cette ligne si nécessaire
        }

        if (fillieres.length === 0) {
            dispatch(fetchFillieres());
        }
    }, [dispatch, id, teacher, fillieres]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting data:', { id, professeur: formData, filliereId: formData.filliereId }); // Ajoutez cette ligne pour débogage
        dispatch(updateTeacher({ id, professeur: formData, filliereId: formData.filliereId }))
            .then(() => {
                navigate('/admindashbord/showteacher');
            })
            .catch(error => {
                console.error('Error updating teacher:', error);
            });
    };

    return (
        <>
            <h1>Modifier Professeur</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formNom">
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

                    <Form.Group as={Col} controlId="formPrenom">
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
                    <Form.Group as={Col} controlId="formUsername">
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

                    <Form.Group as={Col} controlId="formPassword">
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
                    <Form.Group as={Col} controlId="formImg">
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

                    <Form.Group as={Col} controlId="formAge">
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
                    <Form.Group as={Col} controlId="formEmail">
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

                    <Form.Group as={Col} controlId="formTelephone">
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
                    <Form.Group as={Col} controlId="formSexe">
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

                    <Form.Group as={Col} controlId="formFilliere">
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
                        <Button type="submit">Modifier</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
};

export default UpdateTeacher;
