import React, { Component } from "react";

export class ClassEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                tableName: props.product.tableName || "",
                id: props.product.id || "",
                description: props.product.description || "", 
                semester: props.product.semester || "", 
                prefix: props.product.prefix || "",
                number: props.product.number || "",
                grade: props.product.grade || "",
                editing: props.product.editing || ""
            }
        }
    }

    handleChange = (ev) => {
        ev.persist();
        this.setState(state => state.formData[ev.target.name] =  ev.target.value);
    }

    handleClick = () => {
        this.props.saveCallback(this.state.formData);
    }

    render() {
        return <div className="m-2">
            <div className="form-group">
                <label>Class Type</label>
                <input className="form-control" name="tableName"
                    disabled
                    value={ this.state.formData.tableName }
                    onChange={ this.handleChange } />
            </div>
            <div className="form-group">
                <label>ID</label>
                <input className="form-control" name="id"
                    disabled
                    value={ this.state.formData.id }
                    onChange={ this.handleChange } />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="form-control" name="description"
                    value={ this.state.formData.description }
                    onChange={ this.handleChange } />
            </div>            
            <div className="form-group">
                <label>Semester</label>
                <input className="form-control" name="semester"
                    value={ this.state.formData.semester }
                    onChange={ this.handleChange } />
            </div>              
            <div className="form-group">
                <label>Prefix</label>
                <input className="form-control" name="prefix"
                    value={ this.state.formData.prefix }
                    onChange={ this.handleChange } />
            </div>
            <div className="form-group">
                <label>Number</label>
                <input className="form-control" name="number"
                    value={ this.state.formData.number }
                    onChange={ this.handleChange } />
            </div>
            <div className="form-group">
                <label>Grade</label>
                <input className="form-control" name="grade"
                    value={ this.state.formData.grade }
                    onChange={ this.handleChange } />
            </div>                                      
            <div className="text-center">
                <button className="btn btn-primary m-1" 
                        onClick={ this.handleClick }>
                    Save
                </button>
                <button className="btn btn-secondary" 
                        onClick={ this.props.cancelCallback }>
                    Cancel
                </button>                
            </div>
        </div>
    }
}
