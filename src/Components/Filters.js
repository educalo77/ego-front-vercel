import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import s from '../Styles/filters.module.scss';
import { getAllAutos, getAllModels, getAllSuvs, getAllPickups, getOrder } from '../Store/actions/actions';
import { useDispatch } from 'react-redux';

function Filters({ orderBy, orderDirection }) {
    
    const dispatch = useDispatch();

    const [state, setState] = useState({
        dropdownToggled: false,
        dropdownToggledFilter: false
    });

    const handleToggle = show => {
        setState({
            ...state,
            dropdownToggled: show
        })
    }

    const handleToggleFilter = show => {
        setState({
            ...state,
            dropdownToggledFilter: show
        })
    }

    const handleVehicles = (category) => {
        return (e) => {
            e.preventDefault();
            if (category === "Autos") {
                dispatch(getAllAutos())
            };
            if (category === null) { 
                dispatch(getAllModels())
            };
            if (category === "Pickups y Comerciales") {
                dispatch(getAllPickups())
            };            
            if (category === "SUVs y Crossovers") {
                dispatch(getAllSuvs())
            };        
        }
    }

    const handleOrder = (a, b) => {
        return (e) => {
            e.preventDefault();
            if (a && b) {
                dispatch(getOrder(a,b))
            }
        }
    }

    useEffect(() => {
        dispatch(getAllModels())
    }, [dispatch])

    const vehicles = [{name: "Autos"}, {name: "Pickups y Comerciales"}, {name: "SUVs y Crossovers"}]

    return(
        <div className={s['filter-nav']}>
            <Dropdown alignRight className="mr-auto" onToggle={handleToggleFilter}>
                <Dropdown.Toggle as={CustomToggleFilter}>
                        Filtrar por
                        <img src="/img/fill-1.svg" alt="Flecha dropdown"
                             className={s['Fill-1'] + (state.dropdownToggledFilter ? ' ' + s['active'] : '')} />
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item
                        onClick={handleVehicles(null)}
                    >
                        Todos
                    </Dropdown.Item>
                    {vehicles.map((item,index) => (
                        <Dropdown.Item key={index}
                            onClick={handleVehicles(item.name)}
                        >
                            {item.name}
                        </Dropdown.Item>
                    ))} 
                    
                </Dropdown.Menu>
            </Dropdown>

            <div className={s['desktop-filter']}>
                <span className={s['filter-title']}>
                    Filtrar por
                </span>
                <Link to="/" onClick={handleVehicles(null)} className={s['filter-badge']}>
                    Todos
                </Link>
                {vehicles.map(item => (
                    <Link key={item.id} onClick={handleVehicles(item.name)} className={s['filter-badge']}>
                        {item.name}
                    </Link>
                ))} 
            </div>

            <div className="w-25 text-right">
            <Dropdown alignRight className="ml-auto" onToggle={handleToggle}>
                <Dropdown.Toggle as={CustomToggle}>
                        Ordernar por
                        <img src="/img/fill-1.svg" alt="Flecha dropdown"
                             className={s['Fill-1'] + (state.dropdownToggled ? ' ' + s['active'] : '')} />
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item
                        active={orderBy === 'id' && orderDirection === 'asc'}
                        onClick={handleOrder('id','asc')}
                        eventKey="1"
                    >
                        Nada
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={orderBy === 'price' && orderDirection === 'asc'}
                        onClick={handleOrder('price','asc')}
                        eventKey="2"
                    >
                        De <b>menor</b> a <b>mayor</b> precio
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={orderBy === 'price' && orderDirection === 'desc'}
                        onClick={handleOrder('price','desc')}
                        eventKey="3"
                    >
                        De <b>mayor</b> a <b>menor</b> precio
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={orderBy === 'year' && orderDirection === 'desc'}
                        onClick={handleOrder('year','desc')}
                        eventKey="3"
                    >
                        Más <b>nuevos</b> primero
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={orderBy === 'year' && orderDirection === 'asc'}
                        onClick={handleOrder('year','asc')}
                        eventKey="3"
                    >
                        Más <b>viejos</b> primero
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
    );
}


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        className={s['filter-title'] + ' ' + s['filter-title-right']}
        href="/"
        ref={ref}
        onClick={(e) => {
        e.preventDefault();
        onClick(e);
        }}
    >
        {children}
    </a>
));


const CustomToggleFilter = React.forwardRef(({ children, onClick }, ref) => (
    <a
        className={s['filter-title'] + ' ' + s['filter-title-left']}
        href="/"
        ref={ref}
        onClick={(e) => {
        e.preventDefault();
        onClick(e);
        }}
    >
        {children}
    </a>
));



export default Filters;