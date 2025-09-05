import { navigate, useNavigate, useParams } from "react-router-dom";
import useCustomApi from "./useCustomApi";
import {Link} from "react-router-dom";

function Productdet(){

    const navigate = useNavigate();
   const data =  useParams();
   console.log(data.pid);
   const {products1 : prod1}= useCustomApi(`http://localhost:3000/products/${data.pid}`);
   console.log(prod1);
    return(
        <>
        <div className="card" style={{ width: 400 }}>
            <img className="card-img-top" src={prod1.img} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{prod1.id}</h4>
                <p className="card-text">{prod1.name}</p>
                <h3 className="card-text">{prod1.price}</h3>
                <Link to={`/proddet/${prod1.id}`} href="#" className="btn btn-primary">read More</Link>
                <button className="btn btn-primary" onClick={()=>{
                    setTimeout(() => {
                        navigate('/product');
                    }, 2000);
                    
                }}>GoBack</button>
            </div>
            </div>
        </>
    );
}

export default Productdet;