import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import s from '../Styles/navbar-ego.module.scss';
import {Container} from 'react-bootstrap';

function Navbar(){

    const [state,setState] = useState({
        menuToggled: false
    });

    const handleMenu = (e) => {
        e.preventDefault();
        setState({
            ...state,
            menuToggled: !state.menuToggled
        });
    }

    return (
        <React.Fragment>
            <nav className={s['navbar-ego'] + ' sticky-top bg-white'}>
                <Link to="/models/" className={s['navbar-ego-brand']}>
                <img src="/img/logo.png" alt="Ego - logo" />
                </Link>
                <Container className="mt-auto">
                    <ul>
                        <li><NavLink activeClassName={s['active']} exact to="/">Modelos</NavLink></li>
                        <li><NavLink activeClassName={s['active']} to="/model/" >Ficha de modelo</NavLink></li>
                    </ul>
                </Container>
                <Link to="/" onClick={handleMenu} className={s['btn-menu']}>
                    <span>Menú</span>
                <img src="/img/gray.svg" alt="Menú - Icono" />
                </Link>
            </nav>
            {<Menu handleToggle={handleMenu} show={state.menuToggled} />}
        </React.Fragment>
    )
}

function Menu({show, handleToggle}){
    return (
        <div className={s['menu'] + (show ? ' ' + s['show'] : '')}>
            <ul>
                <li>
                    <a href="/" onClick={handleToggle}>
                        Cerrar
                        <img src="/img/fill-1.png" alt="Close menu" />
                    </a>
                </li>
            </ul>
            <div className={s['menu-tab']}>
                <ul>
                    <li><a href="/">Modelos</a></li>
                    <li><a href="/">Servicios y Accesorios</a></li>
                    <li><a href="/">Financiación</a></li>
                    <li><a href="/">Reviews y Comunidad</a></li>
                </ul>
            </div>

            <ul>
                <li>
                    <a href="/">
                        <hr />
                    </a>
                </li>
            </ul>

            <div className={s['menu-tab']}>
                <ul>
                    <li><a href="/">Toyota Mobility Service</a></li>
                    <li><a href="/">Toyota Gazoo Racing</a></li>
                    <li><a href="/">Toyota Híbridos</a></li>
                </ul>
            </div>

            <ul>
                <li>
                    <a href="/">
                        <hr />
                    </a>
                </li>
            </ul>

            <div className={s['menu-tab']}>
                <ul>
                    <li><a href="/">Concesionarios</a></li>
                    <li><a href="/">Test Drive</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </div>


            <div className={s['menu-tab']+' '+s['menu-tab-dark']}>
                <ul>
                    <li><a href="/">Actividades</a></li>
                    <li><a href="/">Servicios al Cliente</a></li>
                    <li><a href="/">Ventas Especiales</a></li>
                    <li><a href="/">Innovación</a></li>
                    <li><a href="/">Prensa</a></li>
                    <li><a href="/">Acerca de...</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
