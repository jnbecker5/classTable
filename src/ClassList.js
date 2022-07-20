import React, { Component } from 'react';
import { ClassDisplay } from './ClassDisplay';


export default class ClassList extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            credits: 0,
            writing: [
                {id: 1, description: "Writing1", semester: "", prefix: "", number: "", grade: "", tableName: "Writing Emphasis"}
            ],
            writing1: [
                {id: 1, description: "Writing1", semester: "", prefix: "", number: "", grade: "", tableName: "Writing Emphasis"},
                {id: 2, description: "Writing2", semester: "", prefix: "", number: "", grade: ""}
            ],
            writing2: [
                {id: 1, description: "Writing1", semester: "", prefix: "", number: "", grade: "", tableName: "Writing Emphasis"},
                {id: 2, description: "Writing2", semester: "", prefix: "", number: "", grade: ""},
                {id: 3, description: "Writing3", semester: "", prefix: "", number: "", grade: ""}
            ],
            speaking: [
                {id: 1, description: "Speaking1", semester: "", prefix: "", number: "", grade: "", tableName: "Speaking Emphasis"}
            ],
            speaking1: [
                {id: 1, description: "Speaking1", semester: "", prefix: "", number: "", grade: "", tableName: "Speaking Emphasis"},
                {id: 2, description: "Speaking2", semester: "", prefix: "", number: "", grade: ""}
            ],
            speaking2: [
                {id: 1, description: "Speaking1", semester: "", prefix: "", number: "", grade: "", tableName: "Speaking Emphasis"},
                {id: 2, description: "Speaking2", semester: "", prefix: "", number: "", grade: ""},
                {id: 3, description: "Speaking3", semester: "", prefix: "", number: "", grade: ""}
            ]
        }
        this.enterName = this.enterName.bind(this);
        this.enterCredits = this.enterCredits.bind(this);
        this.idCounter = 100;
    }
    enterName ( n )  {
        console.log("name" + n);
        this.setState ( 
            {
                name: n.target.value
            }
        )
    }
    enterCredits ( c ) {
        console.log("credits" + c.target.value)
        this.setState ( 
            {
                credits: c.target.value
            }
        )
    }

    saveData = (collection, item) => {
        if (item.id === "") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] 
                = state[collection].concat(item));
        } else {
            this.setState(state => state[collection] 
                = state[collection].map(stored => 
                      stored.id === item.id ? item: stored))
        } 
    }

    deleteData = (collection, item) => {
        this.setState(state => state[collection] 
            = state[collection].filter(stored => stored.id !== item.id));
    }

    render() {
        return <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>        
                <label className = "text-center">Student Name:</label>
                <input className="form-control w-80"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.enterName} />
                <label>Total Transfer Credits:</label>
                <input className="form-control w-80"
                name="age"
                type="number"
                value={this.state.age}
                onChange={this.enterCredits} />
            </div>
        </div>

        <h5 className="bg-primary text-white text-center m-2 p-2">
            Hello, {this.state.name}! <br/>
            You need additional {120-this.state.credits} credit(s) to graduate.
        </h5>
            <div>
                {this.state.credits >= 70 && 
                <ClassDisplay 
                    name="Writing"
                    products={ this.state.writing }
                    saveCallback={ p => this.saveData("products", p) } />
                }
                {this.state.credits < 70 &&
                    this.state.credits >= 40 && 
                        <ClassDisplay 
                            name="Writing"
                            products={ this.state.writing1 }
                            saveCallback={ p => this.saveData("products1", p) } />
                }
                {this.state.credits < 40 && 
                <ClassDisplay 
                    name="Writing"
                    products={ this.state.writing2 }
                    saveCallback={ p => this.saveData("products2", p) } />
                }
                {this.state.credits >= 70 && 
                <ClassDisplay 
                    name = "Speaking"
                    products={ this.state.speaking }
                    saveCallback={ p => this.saveData("speaking", p) } />
                }
                {this.state.credits < 70 &&
                    this.state.credits >= 40 && 
                        <ClassDisplay 
                            name="Speaking"
                            products={ this.state.speaking1 }
                            saveCallback={ p => this.saveData("speaking1", p) } />
                }
                {this.state.credits < 40 && 
                <ClassDisplay 
                    name="Speaking"
                    products={ this.state.speaking2 }
                    saveCallback={ p => this.saveData("speaking2", p) } />
                }
            </div>
        </div>
    }
}
