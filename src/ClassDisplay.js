import React, { Component } from "react";
import { ClassTable } from "./ClassTable"
import { ClassEditor } from "./ClassEditor";
import { TableBanner } from "./TableBanner";

export class ClassDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedProduct: null
        }
    }

    startEditing = (product) => {
        this.setState({ showEditor: true, selectedProduct: product })
    }

    createProduct = () => {
        this.setState({ showEditor: true, selectedProduct: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedProduct: null })
    }

    saveClass = (product) => {
        this.props.saveCallback(product);
        this.setState({ showEditor: false, selectedProduct: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <ClassEditor 
                key={ this.state.selectedProduct.id || -1 }
                product={ this.state.selectedProduct } 
                saveCallback={ this.saveClass }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <ClassTable products={ this.props.products }
                    editCallback={ this.startEditing } />            
                      
            </div>
        }
    }
}
