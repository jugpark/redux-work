import React, { useState } from "react";
import Header from "../../components/header"
import List from "../../components/list"
import Pagination from "../../components/pagination"

const Presenter = (props) => {
    const { searchObj, setSearchObj, fetchList, listObj, setListObj } = props


    return (
        <>
            <div className="wrap">
                <div className="main-content">
                    <Header
                        searchObj={searchObj}
                        setSearchObj={setSearchObj}
                        fetchList={fetchList}
                    />
                    <List
                        listObj={listObj}
                    />
                    {listObj?.list?.length > 0 &&
                        <Pagination
                            listObj={listObj}
                            setListObj={setListObj}
                        />
                    }
                </div>
            </div>
        </>
    );
};

export default Presenter;