import React, { useState } from "react";
import Header from "../../components/header"

const Presenter = (props) => {
    const { searchObj, setSearchObj } = props


    return (
        <>
            <div className="wrap">
                <div className="main-content">
                    <Header
                        searchObj={searchObj}
                        setSearchObj={setSearchObj}
                    />
                    <div className="body"></div>
                    <div className="header"></div>
                </div>
            </div>
        </>
    );
};

export default Presenter;