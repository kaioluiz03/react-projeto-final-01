import React from "react";
import './Footer.css';

export function Footer() {


    return(
        <footer className='rodape'>
            <div className='criadores'>
                <h3>Criadores</h3>
                <ul>
                    <li>Kaio Luiz Guimarães Barreto</li>
                    <li>Inara Alexandre de Oliveira</li>
                    <li>Thassio Ferreira da Silva</li>
                    <li>Isaque Emanuel da Silva</li>
                    <li>Michele Fernanda de França</li>
                    <li>José Marcelo</li>
                </ul>
            </div>
            <div className='sobre'>
                <h3>Sobre</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorum non, 
                    voluptatum maiores quibusdam maxime cumque tenetur atque quis earum aperiam 
                    debitis voluptate quos aliquam explicabo nam, sint dicta est. Lorem ipsum 
                    dolor sit amet consectetur, adipisicing elit. Illum ea eligendi debitis hic 
                    mollitia, voluptates laboriosam obcaecati aliquam impedit minima doloribus 
                    sequi error reprehenderit, nam, soluta eaque! Ab, neque sit.
                </p>
                <h3>Espero que aproveitem a página!</h3>
            </div>
        </footer>
    );
}