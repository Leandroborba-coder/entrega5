import React, { useState } from "react";
import "./global.css";
import Header from './components/Header/index';
import Descriptions from './components/Descriptions/index';
import Products from './components/Products/index';
import Down from './components/Down/index';
import Brand from './components/Brand/index';


function App() {

  const[products, setProducts] = useState([{id:1, name:'iogurte', brand:'natural whey 500g (28g de proteína) - jabuticaba'},{id:2, name:'maça', brand:'natural whey 500g (28g de proteína) - morango'},{id:3, name:'leite', brand:'natural whey 500g (28g de proteína) - cookies and cream'}])
  const[productstest, setProductstest] = useState(["natural whey 500g (28g de proteína) - jabuticaba", "natural whey 500g (28g de proteína) - morango", "natural whey 500g (28g de proteína) - cookies and cream"])  


  return (

    <div>
      <Header title1="Home" title2="Quem Somos" title3="Produtos" title4="Contatos" title5="Pesquisar" title6="Cadastrar-se"/>



      <Brand />

      <Descriptions maintitle="natural whey" description="Nas versões iogurte e shake, a linha Natural Whey combina os ingredientes naturais com a riqueza proteica que só o leite pode oferecer. Os produtos são indicados tanto para o consumo pós e pré-treino, quanto para lanches intermediários e receitas. Nada além da natureza: os produtos da linha Natural Whey estão livres de conservantes, são adoçados com stévia (adoçante natural) e contêm aromas e corantes naturais."/>

      <div className="product-map">
        {products.map((product)=>{return(<Products product ={product.brand} key = {product.id}/>)})}

      </div>

      {/*<Products product1="natural whey 500g (28g de proteína) - jabuticaba" product2="natural whey 500g (28g de proteína) - morango" product3="natural whey 500g (28g de proteína) - cookies and cream"/>*/}

      

      <Down />

    </div>
  );
}

export default App;
