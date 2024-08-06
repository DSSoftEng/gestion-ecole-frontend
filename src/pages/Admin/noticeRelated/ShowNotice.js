
import React, { useEffect } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {  useDispatch,useSelector } from 'react-redux';

import { fetchnotice,deleteNotice } from '../../../store/features/annonces/AnnonceAction';


export default function ShowNotice() {
   const annonces=useSelector((state)=>state.notices.items)
   const annoncesStatus=useSelector((state)=>state.notices.status)
   
   const navigate = useNavigate();
   const dispatch=useDispatch()

   useEffect(() => {
    if (annoncesStatus === 'idle') {
        dispatch(fetchnotice());
    }
}, [annoncesStatus, dispatch]);



  const handleEdit= (id) => {
    navigate(`/admindashbord/modifier-annonce/${id}`);
};

  const handleDelete = (id) => {
    
    dispatch(deleteNotice(id))
           .unwrap()
            .then(() => {
                // Fetch notices again after deletion
                dispatch(fetchnotice());
            })
            .catch((error) => {
                console.error('Failed to delete notice:', error);
             });
  };
//
   const navigateToAddNotice= () => {
     navigate('/admindashbord/ajouter-annonce');
    };
  return (
    <Container>
      <Row className="mb-2">
        <Col className="d-flex justify-content-center">
          <Button variant="primary" onClick={navigateToAddNotice} >Ajouter Annonce</Button>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Image</th>
            <th>Date de Création</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {annonces.map( notice=>
          (<tr key={notice.idAn}>
            <td>{notice.titre}</td>
            <td>{notice.description}</td>
            <td>{notice.image}</td>
            <td>{notice.dateEvent}</td>
            <td>
            <Button variant="warning"  className="me-2" onClick={()=>{handleEdit(notice.idAn)}}>
                                    <FaEdit />
             </Button>
            <Button variant="danger"  onClick={()=>{handleDelete(notice.idAn)}}>
                                    <FaTrash />
            </Button>
            </td>

          </tr>
          )
           


          )

          }
         
        </tbody>
      </Table>
    </Container>
  );
}
