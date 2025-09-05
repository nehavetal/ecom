import { Link } from "react-router-dom";

function Card(props) {
    return (
        <>
            <p>Products Data</p>
            <div className="card" style={{ width: 400 }}>
                <img className="card-img-top" src={props.img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{props.id}</h4>
                    <p className="card-text">{props.name}</p>
                    <h3 className="card-text">{props.price}</h3>
                    <Link to={`/proddet/${props.id}`} href="#" className="btn btn-primary">read More</Link>
                </div>
            </div>
        </>
    )
}
export default Card;