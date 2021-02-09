import React from "react";
import "./global.css";
import Header from './components/Header/index';
import Descriptions from './components/Descriptions/index';
import Product from './components/Products/index';


function App() {

  const list = [

    {
      id: 1,
      name: 'natural whey 500g (28g de proteína) - jabuticaba'

    },

    {
      id: 2,
      name: 'natural whey 500g (28g de proteína) - cookis and cream'
      

    },

    {
      id: 3,
      name: 'natural whey 500g (28g de proteína) - morango'
    },
  ];

  const renderList = list.map(item => (
    <li key={item.id.toString()}>
      <Product data={item.name} />

    </li>
  ));

  return (

    <div>
      <Header title1="Home" title2="Quem Somos" title3="Produtos" title4="Contatos" title5="Pesquisar" title6="Cadastrar-se"/>

      <Descriptions maintitle="natural whey" description="milkshake gostoso"/>

      <ul>{renderList}</ul>

    </div>
  );
}

export default App;
