import { useParams } from 'react-router-dom';
import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Model from '../Components/Model';
import Carousel2 from '../Components/Carousel';
import OtherDetails from '../Components/OtherDetails';
import { useDispatch } from "react-redux";
import { getAllModels } from '../Store/actions/actions';
import s from '../Styles/home.module.scss';

function ModelDetail(){
    const { id } = useParams();
    
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(getAllModels())
    }, [dispatch]);

    window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
    })

    return (
        <React.Fragment>
            {id !== undefined ? 
                (
            <>
            <Container >
                <Model id={id} />
            </Container>
            <Carousel2 id={id} />
            <OtherDetails id={id} />
            </>

            ) :
                (
            <h1 className={s['page-title-detail']}>Elija un modelo</h1>
            )
                }
        </React.Fragment>
    )
}

export default ModelDetail;
