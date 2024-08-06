
import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaUsers, FaSchool } from 'react-icons/fa';
import NoticeCard from '../../Component/NoticeCard';
import { fetchnotice } from '../../store/features/annonces/AnnonceAction';
import { useDispatch, useSelector } from 'react-redux';
export default function HomeStudent() {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.notices.items);
  useEffect(() => {
      dispatch(fetchnotice());
  }, [dispatch]);

  return (
       <>
      <h1>Home Student</h1>
      <Container fluid className="py-3">
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
    </>
  );
}

