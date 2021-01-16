import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import React from 'react';
import {Col, Card} from 'react-bootstrap';

export default function ModelCard({ data }) {

    const { id, model, img, year, price } = data;
    
    return (
        <Col lg={3} md={6}>
            <Card className="border-0">
                {/* <Card.Body className="text-center">
                    <Card.Title className="text-center">{model}</Card.Title>
                    <span>{year} | <CurrencyFormat displayType="text" decimalSeparator={','} thousandSeparator={'.'} prefix={'$'} value={price} /></span>
                    <Link to={'/model/'+id}>
                        <img src={img} width="100%" alt={'Imagen de: ' + model} />
                    </Link>
                    <Link to={'/model/'+id} className="btn btn-dark btn-ego">Ver Modelo</Link>
                </Card.Body> */}
            </Card>
        </Col>
    );
}