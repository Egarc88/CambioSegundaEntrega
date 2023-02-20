import React, { useEffect } from 'react';
import "./styles/ItemListContainer.css"
import { arregloProductos } from "./baseDatos/baseDatos";
import { Link } from "react-router-dom";

const ItemListContainer = ({greeting}) => {


  return (

      <>
   
        <br></br>
        <h2 className="text-muted text-center mt-5 mb-3">{greeting}</h2>
        <div className="container pb-5 px-lg-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
           
               
            {arregloProductos.map((item)=>(
                <div className="col">
                  <div className="card shadow-sm">
                  <img src={item.pictureUrl} className="dimension card-img-top bg-dark cover" alt="..."/>
                  
                    <div className="card-body">
                      <h5 className="card-title text-center">{item.title}</h5>
                      <p className="card-text text-center text-muted">{item.price}</p>
                      <div className="d-grid gap-2">

                          <Link to={"/productos/"+item.id} className="btn btn-outline-dark" replace>
                            Detalle
                          </Link>
     
                      </div>
                    </div>
                  </div>
                </div>)
  )}
                
     
            
          </div>
        </div>
      </>

  )
}

export default ItemListContainer