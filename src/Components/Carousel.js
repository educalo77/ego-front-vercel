import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import s from '../Styles/detailsCarousel.module.scss';
import Carousel, { consts } from 'react-elastic-carousel';
import { getAllDetails } from '../Store/services';

function Carousel2(id) {

    const carId = parseInt(id.id)

    const [details, setDetails] = useState([])

    async function getAllModelDetails(carId) {
    const data = await getAllDetails(carId)
    setDetails(data)
    }
    
    useEffect(() => {
        getAllModelDetails(carId);
    },[]);
    
    return (
        <div className={s['details-content']}>
                        <Carousel
                            renderArrow={myArrow}
                            renderPagination={CustomPagination}
                            itemsToShow={4}
                            itemsToScroll={1}
                            itemPosition={consts.CENTER}
                            breakPoints={[
                                { width: 500, itemsToShow: 1.5 },
                                { width: 600, itemsToShow: 2.5 },
                                { width: 800, itemsToShow: 3.5 },
                                { width: 900, itemsToShow: 4.5 },
                            ]}
                        >
                                {details.map((item, index) => (  
                                    <Card key={index} className={s['card-carousel'] + ' border-0 bg-transparent'}>
                                        <Card.Body>
                                            <img className="img-fluid" key={item.id} src={item.img} alt=""/>
                                            <h5 className={s['card-title']}>{item.description}</h5>
                                            <p>{item.detail}</p>
                                        </Card.Body>
                                    </Card>
                                ))}
                        </Carousel>           
 
                           
        </div>
    );
}


function CustomPagination() {

    const pages = [1];
    const activePage = 1;

    const onClick = () => {

    }

    return (
        <div className="d-flex w-100 justify-content-center">
        {pages.map(page => {
            const isActivePage = activePage === page
            return (
            <div
                className={s['pagination-item'] + (isActivePage ? ' ' + s['active'] : '')}
                key={page}
                onClick={() => onClick(page)}
            />
            )
        })}
        </div>
    );
}

function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? (<img className="arrow-img" src="/img/arrow-left.svg" alt=""/>) : (<img className="arrow-img" src="/img/arrow-right.svg" alt=""/>)
    return (
        <div className={s['arrow-container']} onClick={onClick} disabled={isEdge}>
            {pointer}
        </div>
    )
}

export default Carousel2;