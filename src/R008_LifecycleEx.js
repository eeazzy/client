import React, {Component} from 'react';

class R008_LifecycleEx extends Component{
    static getDerivedStateFromProps(props,state){
        console.log('2. detDerivedStateFromProps Call: '+props.prop_value);
        return {tmp_state: props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constuctor Call');
    }

    componentDidMount(){
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+this.state.tmp_state);
        this.setState({tmp_state2 : true});
    }

    shouldComponentUpdate(props,state){
        console.log('6. shouldComponentUpdate Call / tmp_state2 = '+state.tmp_state2);
        return state.tmp_state2
    }

    render(){
        console.log('3. render Call');
        return(
            <h2>shouldComponentUpdate function</h2>
        )
    }
}

export default R008_LifecycleEx;