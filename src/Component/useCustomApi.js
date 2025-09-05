import { useState } from "react";
import { useEffect } from "react";

const useCustomApi = (url) => {
    const [products1, setProduct] = useState([]);
    const [loading,setLoading]= useState(false);
    useEffect(() => {
        setLoading(true);
        
        fetch(url)
            .then(data => data.json())
            .then(data1 => setProduct(data1))
            .then(()=>setLoading(false));

    }, [url]);
    return { products1, loading };

}
export default useCustomApi;