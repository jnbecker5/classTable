import React, { Component } from "react";

export class TableBanner extends Component {

    render() {
        let c = this.props.product;
        return (
        <th>
            <td>{ <td>{ c.tableName }</td> }</td>
        </th>)
    }
}