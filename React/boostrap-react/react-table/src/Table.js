/**
 * Created by quangh on 9/20/2017.
 */
import React from 'react';
import {render} from 'react-dom';
import styled from 'styled-components';

import ReactTable from 'react-table';
import "react-table/react-table.css";

const StyledTable = styled(ReactTable).attrs({

})`
    box-shadow: inset 0 3px 0 0 #F3A847;    
`;
class Table extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const data = [
            // {
            //     firstName: "Quang",
            //     lastName: "Hoang",
            //     age: 21,
            //     gender: "male"
            // },
            // {
            //     firstName: "Quang",
            //     lastName: "Hoang",
            //     age: 21,
            //     gender: "male"
            // },
            // {
            //     firstName: "Quang",
            //     lastName: "Hoang",
            //     age: 21,
            //     gender: "male"
            // },{
            //     firstName: "Quang",
            //     lastName: "Hoang",
            //     age: 21,
            //     gender: "male"
            // },{
            //     firstName: "Quang",
            //     lastName: "Hoang",
            //     age: 21,
            //     gender: "male"
            // },
            {
                name: "Quang",
                age: 21
            },
            {
                name: "Hoang",
                age: 22
            },
            {
                name: "Jac",
                age: 23
            },
        ];

        const columns = [
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "Age",
                accessor: "age"
            }
        ];

        return (
            <div>
                <StyledTable
                    data={data}
                    columns={columns}
                    defaultPageSize={2}
                    showPaginationTop
                    defaultSorted={[{ id: 'age', desc: true }]}
                    className="-striped -highlight"
                >
                </StyledTable>
            </div>
        )
    }
}

export default Table