import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaUsers, FaSchool } from 'react-icons/fa';
import NoticeCard from '../../Component/NoticeCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchnotice } from '../../store/features/annonces/AnnonceAction';
import {NbrOfStudent} from '../../store/features/students/StudentAction'

import {NbrOfTeacher} from '../../store/features/teachers/TeacherAction'
import {NbrOfClass} from '../../store/features/filliere/FilliereAction'
const HomeAdmin = () => {
    const dispatch = useDispatch();
    const notices = useSelector((state) => state.notices.items);
    const totalStudents=useSelector((state)=>state.students.totalstudent)
    const totalTeachers = useSelector((state)=>state.teachers.totalTeachers)
    const totalFields =useSelector((state)=>state.fillieres.totalFilliere);
    useEffect(() => {
        dispatch(fetchnotice());
        dispatch(NbrOfStudent());
        dispatch(NbrOfTeacher());
        dispatch(NbrOfClass());
    }, [dispatch]);


    return (
        <Container fluid className="py-3">
            <Row className="justify-content-center mb-4">
                <Col xs={12} sm={4} className="mb-4">
                    <Card className="h-100 text-center">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FaUser color="primary" size={60} className="mb-3" />
                            <Card.Title>Les Etudiants Totale </Card.Title>
                            <Card.Text>{totalStudents}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4} className="mb-4">
                    <Card className="h-100 text-center">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FaUsers color="primary" size={60} className="mb-3" />
                            <Card.Title>Les Professeurs Totale</Card.Title>
                            <Card.Text>{totalTeachers}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4} className="mb-4">
                    <Card className="h-100 text-center">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FaSchool color="primary" size={60} className="mb-3" />
                            <Card.Title>Les Filliere Totale</Card.Title>
                            <Card.Text>{totalFields}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center">
                {notices.map((ann) => (
                    <Col xs={12} key={ann.idAn}>
                        <NoticeCard
                            title={ann.titre}
                            description={ann.description}
                            image={`http://localhost:8082/api/annonce/image/${ann.idAn}`}// cette api est tres important tu lui id nnoncee elle envoie image
                            date={ann.dateEvent}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomeAdmin;
