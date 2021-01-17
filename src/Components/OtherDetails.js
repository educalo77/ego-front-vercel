import React, { useEffect, useMemo } from 'react';
import {Col} from 'react-bootstrap';
import s from '../Styles/mainDetail.module.scss';
import { getAllOther, getAllOtherTwo } from '../Store/actions/actions';
import { useSelector, useDispatch } from 'react-redux';


function OtherDetails() {
    
    const dispatch = useDispatch();

    const detallesUno = useSelector((state) => state.allModels.details1);
    const detallesDos = useSelector((state) => state.allModels.details2);

    const detailsOne = useMemo(() => detallesUno);
    const detailsTwo = useMemo(() => detallesDos);

    console.log(detailsOne, detailsTwo)

  useEffect(()=>{
    (async function(){
        dispatch(await getAllOther(1, 1))
    })()
  }, [])
    
     useEffect(()=>{
    (async function(){
        dispatch(await getAllOtherTwo(1, 2))
    })()
  }, [])
    

    return (
        <div className={s['container']}>
            <div className={s['first']}>
            {detailsOne && detailsOne.map((item) => {
            return    (
            (<React.Fragment>
            <Col md={6}>
            <div className={s['details-container']}>
                <h3 className={s['title']}>{item.description}</h3>
                <p className={s['description']}>{item.detail}</p>
            </div>
            </Col>
            <Col className="my-4" md={6}>
            <img src={item.img} className="img-fluid rounded" alt={'Imagen de ' + item.detail} />
            </Col>
            </React.Fragment>)
            )
            })} 
            </div>
            <div className={s['second']}>
                        {detailsTwo && detailsTwo.map((item) => {
            return    (
                (<React.Fragment>
            <Col className="my-4" md={6}>
            <img src={item.img} className="img-fluid rounded" alt={'Imagen de ' + item.detail} />
            </Col> 
            <Col md={6}>
            <div className={s['details-container']}>
                <h3 className={s['title']}>{item.description}</h3>
                <p className={s['description']}>{item.detail}</p>
            </div>
            </Col>
            </React.Fragment> )
            )
            })}
            </div>    
        </div>
    );
}


export default OtherDetails;