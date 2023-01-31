import { useEffect } from "react";
import Presenter from "./presenter";

const Container = (props) => {

    useEffect(() => {
        initAllList();
    }, [])

    const initAllList = async () => {
        const requestURL = 'https://dummyjson.com/products?limit=100';
        fetch(requestURL)
            .then(res => {
                console.log(res)
                return res.json();
            })
            .then(data => {
            });
    }

    
    // var requestURL = 'https://dummyjson.com/products?limit=100';
    // var request = new XMLHttpRequest();
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();

    // request.onload = function() {
    //     var superHeroes = request.response;
    //     console.log(superHeroes)
    //   }

    return (
        <Presenter
        />
    );
};
export default Container;
