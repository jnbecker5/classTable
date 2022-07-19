import React, { Component } from "react";

export class ClassTableRow extends Component {

    render() {
        let p = this.props.product;
        return <tr>
            <td>{ p.id }</td>
            <td>{ p.description }</td>
            <td>{ p.semester}</td>
            <td>{ p.prefix }</td>
            <td>{ p.number }</td>
            <td>{ p.grade}</td>

            <td>
                <div className="col-md-12 text-center">
                <button className="text-center btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(p) }>
                        Edit
                </button>
                </div>
                  
            </td>
        </tr>
    }
}
