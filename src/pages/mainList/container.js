import { useEffect, useState } from "react";
import Presenter from "./presenter";

const Container = (props) => {
    const [listObj, setListObj] = useState({
        list: [],
        paginglist: [],
        maxPage: 0,
        splitedList: [],
        columns: ["상품번호", "상품명", "브랜드", "상품내용", "가격", "평점", "재고"],
        pagingSize: 10,
        pageCount: 10,
        start: 0,
    })
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
        fetchList();
    }, [])

    const fetchList = async () => {
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
                    setListObj({...listObj, list: data.products})
                }
            });
    }

    console.log(listObj)

    return (
        <Presenter
            searchObj={searchObj}
            setSearchObj={setSearchObj}
            fetchList={fetchList}
            listObj={listObj}
            setListObj={setListObj}
        />
    );
};
export default Container;
