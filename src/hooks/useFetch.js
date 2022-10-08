import React, { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods,setFoods] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return [foods];
};

export default useFetch;