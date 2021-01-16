import React, {useEffect, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import s from '../Styles/model.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getOneModel } from '../Store/actions/actions';

function Model() {
    
    const id = useParams();
    const dispatch = useDispatch();

    const vehicle = useSelector((state) => state.allModels.model);

    const model = useMemo(() => vehicle);

    useEffect(() => {
        dispatch(getOneModel(parseInt(id.id)));
    },[]);


    return (
        <Row>
            {id === model.model && <Redirect to="/"/>}
            <Col md={6}>
                <img className={'img-fluid '+s['img-main']} src={model.img} alt={'Imagen principal de '+model.model} />
            </Col>
            <Col md={6}>
                <h2 className={s['model-title']}>{model.fullmodel}</h2>
                <h1 className={s['main-title']}>{model.slogan}</h1>
                <p className={s['short-description']}>
                    {model.description}
                </p>
            </Col>
        </Row>
    );
}


export default Model;