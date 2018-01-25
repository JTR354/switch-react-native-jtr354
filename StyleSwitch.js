import React, {Component} from 'react';

import {
    View,
    TouchableWithoutFeedback,
    LayoutAnimation,
    Platform,
    UIManager
} from 'react-native';

const animationType = [
    LayoutAnimation.spring,
    LayoutAnimation.linear,
    LayoutAnimation.easeInEaseOut
]

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default class Switch extends Component {

    static defaultProps = {
        boxStyle:{
            width: 55,
            height: 30,
            borderRadius: 30,
            backgroundColor: '#D9D9D9'
        },
        boxIsOnStyle:{
            backgroundColor: '#1678FF'
        },
        switchStyle:{
            width: 30,
            height: 30,
            backgroundColor: '#fff',
            borderRadius: 30,
            borderColor: 'rgba(0,0,0,.1)',
            borderWidth: .5
        },
        animationType:0
    };

    componentWillReceiveProps(nextProps){
        this.props = nextProps
    }

    componentWillUpdate(){
        animationType[this.props.animationType]()
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.change}>
                <View style={[
                    this.props.boxStyle,
                    !!this.props.isOn  ?
                        this.props.boxIsOnStyle: ''
                ]}>
                    <View style={[
                        this.props.switchStyle,{
                            position:'absolute',
                        },
                        !!this.props.isOn  ?
                            {
                                right:0
                            } : {
                                left:0
                            }
                    ]}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

