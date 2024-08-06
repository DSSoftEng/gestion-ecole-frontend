import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers, addTeacher, updateTeacher, deleteTeacher } from '../../../store/features/teachers/TeacherAction'; // Assurez-vous que le chemin et le nom du fichier sont corrects
import { useNavigate } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ShowTeachers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teachers = useSelector(state => state.teachers.items);
    const teacherStatus = useSelector(state => state.teachers.status);
    const error = useSelector(state => state.teachers.error);

    useEffect(() => {
        if (teacherStatus === 'idle') {
            dispatch(fetchTeachers());
        }
    }, [teacherStatus, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTeacher(id));
    };

    const handleUpdate = (teacher) => {
        navigate(`/admindashbord/modifier-professeur/${teacher.id}`);
    };

    const navigateToAddTeacher = () => {
        navigate('/admindashbord/ajouter-professeur');
    };

    return (
        <>
            {/* Add teacher Button */}
            <div className="d-flex justify-content-end mb-3">
                <Button variant="primary" onClick={navigateToAddTeacher}>Ajouter Professeur</Button>
            </div>

            {/* Loading and Error States */}
            {teacherStatus === 'loading' && <Alert variant="info">Loading...</Alert>}
            {teacherStatus === 'failed' && <Alert variant="danger">{error}</Alert>}

            {/* Teachers Table */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ display: 'none' }}>ID</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Filière</th>
                        <th>Âge</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Téléphone</th>
                        <th>Sexe</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map(teacher => (
                       
                        
                        <tr key={teacher.id}>
                            <td style={{ display: 'none' }}>
                                <input type="hidden" value={teacher.id} />
                            </td>
                            <td>{teacher.nom}</td>
                            <td>{teacher.prenom}</td>
                            <td>{teacher.username}</td>
                            <td>{teacher.password}</td>
                            <td>{teacher.filliere.nameFilliere}</td>
                            <td>{teacher.age}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.img}</td>
                            <td>{teacher.telephone}</td>
                            <td>{teacher.sexe}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleUpdate(teacher)} className="me-2">
                                    <FaEdit />
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(teacher.id)}>
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ShowTeachers;
