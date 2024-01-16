import React ,{Component} from 'react';

class R009_Es6 extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jsString1 = '자바스크립트'
        var jsString2 = '입니다 \n 다음줄 입니다'
        console.log(jsString1+' 문자열'+jsString2+'~');

        var Es6String1 = 'Es6'
        var Es6String2 = '입니다'  
        console.log('');
    }
}