import { Link } from "react-router-dom";
import { arregloProductos } from "./baseDatos/baseDatos";
import { useNavigate,useParams } from "react-router-dom";
import "./styles/ItemDetalle.css"


function ItemDetalle() {

    const { id } = useParams()
    const navigate = useNavigate()

    const producto = arregloProductos.find(item => item.id == id);
    console.log(producto);

  return (

    <div className="container mt-5 py-4 px-xl-5">
      <div className="row mb-5">
        <div className="d-none d-lg-block col-lg-1">
          <div className="image-vertical-scroller">
            <div className="d-flex flex-column">
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
            <img src={producto.pictureUrl} className="border rounded ratio ratio-1x1 dimension2" alt="..."/>
            </div>
          </div>

        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">{producto.title}</h2>
            <h4 className="text-muted mb-4">{producto.price}</h4>

            <div className="row g-3 mb-4">
              <div className="col">
                <button className="btn btn-outline-dark py-2 w-100">
                  Agregar al carrito
                </button>
              </div>
              <div className="col">
                <button className="btn btn-dark py-2 w-100">Comprar ahora</button>
              </div>
            </div>

            <h4 className="mb-0">Descripcion</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
                {producto.detalle}
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <hr />
          <div className="text-muted my-4">
                <Link to={"/productos/"} className="btn btn-outline-dark" replace>
                    Seguir comprando
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetalle;
