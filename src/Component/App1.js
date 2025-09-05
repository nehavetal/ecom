import CardList from "./CardList";
import { useEffect, useState } from "react";
import useCustomApi from "./useCustomApi";


function App() {

    //const [products, setProduct] = useState([]); //to set products
    //const [cnt, setCnt] = useState(0); //counter

    const [url, setUrl] = useState("http://localhost:3000/products");
    const { products1: products, loading:load } = useCustomApi(url);  //custome api create


    //render infinite time called side effect
    // const getData =()=>{
    //     fetch("http://localhost:3000/products")
    //     .then(data=> data.json())
    //     .then(data1=>setProduct(data1));
    // }
    // getData();

    //to overcome side effect useEffect() hook is used
    // useEffect(() => {
    //     fetch(url)
    //         .then(data => data.json())
    //         .then(data1 => setProduct(data1));

    // }, [url]);
    console.log(products);

    return (
        <>
            <h1>E-Book Shop</h1>
            <div id="button-group">
                <button onClick={() => setUrl("http://localhost:3000/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:3000/products?category=mobile")}>Smart_Phone</button>
                <button onClick={() => setUrl("http://localhost:3000/products?category=watch")}>Smart_Watch</button>
                <button onClick={() => setUrl("http://localhost:3000/products?category=tv")}>Smart_Tv</button>
                <button onClick={() => setUrl("http://localhost:3000/products?category=washing_machine")}>Washing_Machine</button>
            </div>

            {
                load && <button class="btn btn-primary">
                    <span class="spinner-border spinner-border-sm"></span>
                    Loading..
                </button>
            }

            <CardList products1={products} />
            {/* <button onClick={()=>setCnt(cnt+1)}>Counter</button> //counter button */}
        </>
    );
}

export default App;

