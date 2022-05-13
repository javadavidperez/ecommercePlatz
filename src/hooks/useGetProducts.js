import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {const response = await axios(API)
        setProducts(response.data); //data will be the list of items
    };

    return products;
};

export default useGetProducts;
