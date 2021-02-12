import React from 'react';
import {FiArrowLeft} from "react-icons/fi";
import { Link } from 'react-router-dom';
import "./styles.css";
import Header from '../../components/Header/index';
import Brand from '../../components/Brand/index';
import Down from '../../components/Down/index';
import Iogurte from '../../components/Iogurte';

export default function Screen2(){
    return(
        <div>
           
           


            <Header title1="Home" title2="Quem Somos" title3="Produtos" title4="Contatos" title5="Pesquisar" title6="Cadastrar-se"/>
            <Brand />

            <Link to="/"> <FiArrowLeft size={50} /> </Link>

            <Iogurte />

            <Down />


            
        </div>
    )

}