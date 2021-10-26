import React from "react";
import './HeaderStyle.css';
import imgPortal from '../../assets/portal.png'
import gif from '../../assets/gifLogo'
import { Footer } from "../footer/Footer";


export function Header(){

    return(
        <div className='container-header'>
            <header className='header'>
                <img src={gif} alt="Logo-name" />
                <nav className='nav-bar'>   
                    <a href="">HOME</a>
                    <a href="">PERSONAGENS</a>
                    <a href="">SOBRE A SÉRIE</a>
                    <a href="">DETALHES DOS PERSONAGENS</a>
                </nav>
                <button>▽</button>
            </header>
        </div>

    );
}