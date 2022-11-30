import React from 'react';
import Control from "./control";
import Table from "./table";
import NavMonth from "./navMounth";

function Schedule1(props) {
        return (
        <div className="d-flex flex-column m-5 fs-10">
            <NavMonth/>
            <Control/>
            <Table/>
        </div>
    );
}

export default Schedule1;