import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authService } from '../../../service/authService';
import { getUserByUsername, UpdateUser } from '../../../store/features/user/UserAction';

const ProfileAdmin = () => {
  const [formData, setFormData] = useState({
    id: '',
    nom: '',
    prenom: '',
    sexe: '',
    telephone: '',
    img: '',
    age: '',
    email: '',
    newPassword: '', // Champ pour le nouveau mot de passe
    username: ''
  });

  const dispatch = useDispatch();
  const username = authService.getUserName(localStorage.getItem('token'));
  const adminUser = useSelector((state) => state.user.user);
  console.log(adminUser)
  useEffect(() => {
    dispatch(getUserByUsername({ username }));
  }, [dispatch, username]);

  useEffect(() => {
    if (adminUser) {
      setFormData({
        id: adminUser.id || '',
        nom: adminUser.nom || '',
        prenom: adminUser.prenom || '',
        sexe: adminUser.sexe || '',
        telephone: adminUser.telephone || '',
        img: adminUser.img || '',
        age: adminUser.age || '',
        email: adminUser.email || '',
        newPassword: '', // Ne pas pré-remplir le mot de passe
        username: adminUser.username || ''
      });
    }
  }, [adminUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const idUser = adminUser.id;
    if (idUser) {
      const updatedUser = { ...formData };
      if (formData.newPassword) {
        updatedUser.password = formData.newPassword; // Utiliser le nouveau mot de passe
      }
      delete updatedUser.newPassword; // Supprimer le champ newPassword de l'objet avant l'envoi
      dispatch(UpdateUser({ idUser, user: updatedUser }));
      alert('Informations mises à jour avec succès !');
    } else {
      alert('Erreur: ID utilisateur non défini');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <section style={{ backgroundColor: '#eee', width: '100%' }}>
      <Container className="py-5">
        <Row>
          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <img
                  src='https://th.bing.com/th/id/OIP.fzbbZPO8yXyHrlv31J9LCwHaHa?w=512&h=512&rs=1&pid=ImgDetMain'
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: '150px' }}
                />
                <h5 className="my-3">{formData.prenom} {formData.nom}</h5>
                <p className="text-muted mb-1">Email: {formData.email}</p>
                <p className="text-muted mb-1">Sexe: {formData.sexe}</p>
                <p className="text-muted mb-1">Âge: {formData.age}</p>
                <p className="text-muted mb-1">Téléphone: {formData.telephone}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="mb-4">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="prenom">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre prénom"
                          value={formData.prenom}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="nom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre nom"
                          value={formData.nom}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="sexe">
                        <Form.Label>Sexe</Form.Label>
                        <Form.Control
                          as="select"
                          value={formData.sexe}
                          onChange={handleChange}
                        >
                          <option value="">Sélectionner...</option>
                          <option value="M">M</option>
                          <option value="F">F</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="telephone">
                        <Form.Label>Téléphone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez votre numéro de téléphone"
                          value={formData.telephone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="img">
                        <Form.Label>URL de l'image</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entrez l'URL de votre image"
                          value={formData.img}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="age">
                        <Form.Label>Âge</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Entrez votre âge"
                          value={formData.age}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Entrez votre email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* Champ pour le nouveau mot de passe */}
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3" controlId="newPassword">
                        <Form.Label>Nouveau mot de passe</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Entrez votre nouveau mot de passe"
                          value={formData.newPassword}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button variant="primary" type="submit">
                    Mettre à jour
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfileAdmin;
