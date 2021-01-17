import React, { useEffect, useMemo } from 'react';
import ModelCard from './ModelCard';
import { Row } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { getAllModels, getOrder } from '../Store/actions/actions';


function Models() {

    const dispatch = useDispatch();

    const allmodels = useSelector((state) => state.allModels.models);
    const allsort = useSelector((state) => state.allModels.order);

    const models = useMemo(() => allmodels);
    const typeorder = useMemo(() => allsort.a);
    const wayorder = useMemo(() => allsort.b);

    const data = useMemo(() => {
        if (models) {
        if (typeorder === 'price' && wayorder === 'asc') {
            return models.sort((a, b) => (a.price < b.price) ? -1 : 1)
        }
        if (typeorder === 'price' && wayorder === 'desc') {
            return models.sort((a, b) => (a.price > b.price) ? -1 : 0)
        }
        if (typeorder === 'year' && wayorder === 'asc') {
            return models.sort((a, b) => (a.year < b.year) ? -1 : 1)
        }
        if (typeorder === 'year' && wayorder === 'desc') {
            return models.sort((a, b) => (a.year > b.year) ? -1 : 0)
        }
        if (typeorder === undefined) {
            return models
        }  
        }
    },[typeorder, wayorder, models])

    useEffect(() => {
        dispatch(getAllModels())
    }, [getOrder]);

    return (
        <div>
             {models && (models.length !== 0) ? 
                (<Row>
            {models.map(item => (
                <ModelCard key={item.id} data={item} />
            ))}
        </Row>) : (
            <h2>No hay modelos disponibles</h2>
        )} 
        </div>
    )
}

export default Models
