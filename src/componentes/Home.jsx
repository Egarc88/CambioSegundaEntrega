import React from 'react'
//import { NavBar } from '../componentes/NavBar';
import ItemListContainer from '../componentes/ItemListContainer';
import Banner from "../landing/Banner";

const Home = () => {
  return (
    <>
       
        <Banner />  
        <ItemListContainer greeting="Toys Collectors"/>
    </>
  )
}

export default Home
