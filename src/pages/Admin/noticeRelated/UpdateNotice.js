
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import {updateNotice} from '../../../store/features/annonces/AnnonceAction'
 

const UpdateNotice = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notice=useSelector(state => state.notices.items.find(nt => nt.idAn === parseInt(id)));

    const [formData, setFormData] = useState({
        titre: '',
        description: '',
        image: '',
        dateEvent: new Date().toISOString().split('T')[0] // Set the date to the current date in YYYY-MM-DD format
    });

    useEffect(() => {
        if (notice) {
            setFormData({
                titre:notice.idAn,
                description:notice.description,
                image: notice.image,
                dateEvent:notice.dateEvent
                
            });
        } else {
           // dispatch(fetchStudentById(id));
        }},[dispatch,id])


     const handleChange =(e)=>{
        setFormData( {...formData,
            [e.target.name]:e.target.value

           })

          
     }
      const  handleSubmit=(event)=>{
       event.preventDefault()
       dispatch(updateNotice({ id, annonce: formData}))
       navigate('/admindashbord/shownotice');
      }


    return(
        <>
        <h1>Ajouter Annonce</h1>
        <Form onSubmit={handleSubmit} className="form-inline">
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
                        type="text"
                        placeholder="Image URL"
                        name="image"
                        value={formData.image}
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
    )
}
export default UpdateNotice 
