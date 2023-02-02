import { useEffect, useState } from "react";
import Presenter from "./presenter";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setListObj, setListObjInitialState } from "../../redux/services/list/listSlice";

const Container = (props) => {
    const { listObj } = useSelector((state) => state.list)
    const dispatch = useDispatch();
    const [searchObj, setSearchObj] = useState(
        JSON.parse(sessionStorage.getItem("searchObj")) ||
        {
            OptionList: [
                { value: null, label: "전체" },
                { value: "title", label: "상품명" },
                { value: "brand", label: "브랜드" },
                { value: "description", label: "상품내용" },
            ],
            title: "상품검색",
            searchOption: null,
            searchValue: null,
        })
    const [renderFlag, setRenderFlag] = useState(false)
    useEffect(() => {
        fetchList();
        setRenderFlag(true)
    }, [])

    useEffect(() => {
        sessionStorage.setItem("searchObj", JSON.stringify(searchObj))
    }, [searchObj])

    useEffect(() => {
        sessionStorage.setItem("listObj", JSON.stringify(listObj))
    }, [listObj])

    const fetchList = async () => {
        if (sessionStorage.getItem("listObj") && renderFlag == false) {
            dispatch(setListObjInitialState(JSON.parse(sessionStorage.getItem("listObj"))))
        } else {
            try {
                sessionStorage.removeItem("listObj")
                const requestURL = 'https://dummyjson.com/products?limit=100';
                let requestFlag = false;
                fetch(requestURL)
                    .then(res => {
                        if (res.status === 200) {
                            requestFlag = true;
                            return res.json();
                        }
                        else {
                            alert("데이터 로딩에 실패하였습니다.")
                        }
                    })
                    .then(data => {
                        if (requestFlag === true) {
                            const list = {
                                key: "list",
                                list: data?.products ?? []
                            }
                            if (searchObj.searchOption != null && searchObj.searchValue != null) {
                                const filtered = {
                                    key: "filtered",
                                    list: data?.products?.filter((obj) => { return obj[searchObj.searchOption].includes(searchObj.searchValue) })
                                }
                                if (filtered.list.length > 0) {
                                    dispatch(setListObj(filtered))
                                }
                                else {
                                    alert("검색된 값이 존재하지 않습니다.")
                                    dispatch(setListObj(list))
                                }
                            }
                            else {
                                dispatch(setListObj(list))
                            }
                        }
                    })
            } catch (error) {
                alert(error)
            }
        }
    }

    return (
        <Presenter
            searchObj={searchObj}
            setSearchObj={setSearchObj}
            fetchList={fetchList}
        />
    );
};
export default Container;
