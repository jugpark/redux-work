import React from "react";

//redux
import { useSelector } from "react-redux";

//components
import Header from "../../components/header"
import List from "../../components/list"
import Pagination from "../../components/pagination"

const Presenter = (props) => {
    const { listObj } = useSelector((state) => state.list)
    const { searchObj, setSearchObj, fetchList } = props


    return (
        <>
            <div className="wrap">
                <div className="main-content">
                    <Header
                        searchObj={searchObj}
                        setSearchObj={setSearchObj}
                        fetchList={fetchList}
                    />
                    <div className="count">검색된 데이터 : {listObj?.list?.length} 건</div>
                    {listObj?.list?.length > 0 &&
                        <>
                            <List />
                            <Pagination />
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Presenter;