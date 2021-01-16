import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import s from '../Styles/home.module.scss';
import Filters from '../Components/Filters';
import Models from '../Components/Models';


function Home() {
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className={s['page-title']}>
                        Descubrí todos los modelos
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Filters />
                </Col>
            </Row>
            <Models />
        </Container>
    )
}

export default Home;
