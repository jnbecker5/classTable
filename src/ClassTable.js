import React, { Component } from "react";
import { ClassTableRow } from "./ClassTableRow";
import { TableBanner } from "./TableBanner";

export class ClassTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                    <th colSpan="7" className="bg-primary text-white text-center h4 p-2">
                     {
                        this.props.products.map(c => 
                            <TableBanner
                                product={ c } 
                                key={ c.tn }/>)
                    }
                    </th>
                    </tr>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Semester</th>
                        <th className="text-center">Prefix</th>
                        <th className="text-center">Number</th>
                        <th className="text-center">Grade</th>
                        <th className="text-center">Editing</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.map(p => 
                            <ClassTableRow
                                product={ p } 
                                key={ p.id }
                                editCallback={ this.props.editCallback } />)
                    }
                </tbody>
            </table>        
    }
}
