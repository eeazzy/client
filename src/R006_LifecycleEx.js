import React , {Component} from 'react';

class R006_LifecycleEx extends Component{
    static getDerivedStateFromProps(props,state){
        console.log('2. getdriveredStateFromProps Call : '+props.props_value);
        return;
    }

    constructor(props){
        super(props);
        this.state = {}; //이걸 항상 제일 먼저 부름
        console.log('1. constuctor Call');
    }

    render() {
        console.log('3. render Call');
        return(
            <h2>constuctor function</h2>
        )
    }
}

export default R006_LifecycleEx;

