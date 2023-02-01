import { useEffect, useState } from "react";
import Presenter from "./presenter";

const Container = (props) => {
    const [searchObj, setSearchObj] = useState({
        OptionList: [
            { value: null, label: "전체" },
            { value: "productName", label: "상품명" },
            { value: "brand", label: "브랜드" },
            { value: "productDescription", label: "상품내용" },
        ],
        title: "상품검색",
        searchOption: null,
        searchValue: null,
    })
    useEffect(() => {
        initAllList();
    }, [])

    const initAllList = async () => {
        const requestURL = 'https://dummyjson.com/products?limit=100';
        let requestFlag = false;
        fetch(requestURL)
            .then(res => {
                if (res.status == 200) {
                    requestFlag = true;
                    return res.json();
                }
                else {
                    alert("데이터 로딩에 실패하였습니다.")
                }
            })
            .then(data => {
                if (requestFlag == true) {
                    console.log(data)
                }
            });
    }

    return (
        <Presenter
            searchObj={searchObj}
            setSearchObj={setSearchObj}
        />
    );
};
export default Container;
