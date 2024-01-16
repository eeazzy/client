import React, {Component} from 'react';

class R007_LifecycleEx extends Component {
    static getDerivedStateFromProps(props,state){
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
        return {tmp_state:props.prop_value};
    }

    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constuctor Call');
    }

    componentDidMount() { //맨 마지막에 호출 정점을 찍고 내려옴
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+this.state.tmp_state);
    }

    render() {
        console.log('3.render Call');
        return(
            <h2>component function</h2>
        )
    }
}

export default  R007_LifecycleEx;