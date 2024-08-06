import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents, deleteStudent, updateStudent, addStudent } from '../../../store/features/students/StudentAction';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ShowStudents = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const students = useSelector(state => state.students.items);
    const studentStatus = useSelector(state => state.students.status);
    const error = useSelector(state => state.students.error);

    useEffect(() => {
        if (studentStatus === 'idle') {
            dispatch(fetchStudents());
        }
    }, [studentStatus, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteStudent(id));
    };

    const handleUpdate = (student) => {
        navigate(`/admindashbord/modifier-etudiant/${student.id}`);
    };

    const navigateToAddStudent = () => {
        navigate('/admindashbord/ajouter-etudiant');
    };

    return (
        <>
            {/* Add Student Button */}
            <div className="d-flex justify-content-end mb-3">
                <Button variant="primary" onClick={navigateToAddStudent}>Ajouter Etudiant</Button>
            </div>

            {/* Loading and Error States */}
            {studentStatus === 'loading' && <Alert variant="info">Loading...</Alert>}
            {studentStatus === 'failed' && <Alert variant="danger">{error}</Alert>}

            {/* Students Table */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {/* Hide ID column in the header */}
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
                    {students.map(student => (
                        <tr key={student.id}>
                            {/* Hide ID column in the row */}
                            <td style={{ display: 'none' }}>
                                <input type="hidden" value={student.id} />
                            </td>
                            <td>{student.nom}</td>
                            <td>{student.prenom}</td>
                            <td>{student.username}</td>
                            <td>{student.password}</td>
                            <td>{student.filliere.nameFilliere}</td>
                            <td>{student.age}</td>
                            <td>{student.email}</td>
                            <td>{student.img}</td>
                            <td>{student.telephone}</td>
                            <td>{student.sexe}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleUpdate(student)} className="me-2">
                                    <FaEdit />
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(student.id)}>
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

export default ShowStudents;
