'use strict'

/**
 * useFetch is a custom hook that use the fetch API for make request.
 * @param: url an String that representing the url to request
 * @param: config an optional configuration object to use in the feych request
 * 
 * @return: response, the request response
 * @return: loading, the loading state of the request
 * @return: error, true if an error appear
*/
const { useState, useEffect } = require('react');

const useFetch = ( url, config ) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
        
            try{
                const request = await fetch(url, config ? config : null);
                const resp = await request.json();
                setResponse(resp);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }

        }
        fetchData();

    }, []);

    return { response, error, loading };

}

module.exports = useFetch;

