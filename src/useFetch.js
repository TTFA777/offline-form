import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch data for that resource');
            }
            return res.json();
        })
        .then(data=> {
            setData(data);
            setIsPending(false);
        });
    }, [url]);

    return {data,isPending}
}
export default useFetch;