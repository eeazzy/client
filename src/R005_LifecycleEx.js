import React, {Component} from 'react';

class R005_LifeCycleEx extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        console.log("1. constructor call");
    }

    render() {
        console.log("3. render call");
        return(
            <h2>this is constructor function</h2>
        )
    }
}

export default R005_LifeCycleEx;