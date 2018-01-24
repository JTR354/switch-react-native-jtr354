/**
 * toggle-switch-react-native
 * Toggle Switch component for react native, it works on iOS and Android
 * https://github.com/aminebenkeroum/toggle-switch-react-native
 * Email:amine.benkeroum@gmail.com
 * Blog: https://medium.com/@aminebenkeroum/
 * @benkeroumamine
 */

import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Animated,
    Easing,
} from 'react-native'

import PropTypes from 'prop-types'

class ToggleSwitch extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            isOn: this.props.isOn,
            label: this.props.label,
            offsetX: new Animated.Value(0),
            initialDirection: (this.props.isOn) ? {right: 0} : {left: 0},
            animatedView:{
                margin:this.props.animatedView.margin,
                backgroundColor:this.props.animatedView.backgroundColor
            },
            touchView:{
                borderRadius:this.props.touchView.borderRadius,
                activeOpacity:this.props.touchView.activeOpacity
            }

        }
        this.calculateDimensions(this)
    }

    static propTypes = {
        isOn: PropTypes.bool.isRequired,
        label: PropTypes.string,
        onColor: PropTypes.string.isRequired,
        offColor: PropTypes.string.isRequired,
        size: PropTypes.object,
        labelStyle: PropTypes.object,
        onToggle: PropTypes.func.isRequired
    }

    static defaultProps = {
        isOn: false,
        onColor: '#634fc9',
        offColor: '#ecf0f1',
        labelStyle: {},
        size:{
            width: 61.2,
            padding: 14.4,
            cercleWidth: 27,
            cercleHeight: 27,
            translateX: 28.08,
        },
        animatedView:{
            margin:1,
            backgroundColor:'#fff'
        },
        touchView:{
            borderRadius:20,
            activeOpacity:1
        }
    }

    calculateDimensions() {
        let obj = this.props.size
        let dimensions = {}
        dimensions = {
            width: obj.width,
            padding: obj.padding,
            cercleWidth: obj.cercleWidth,
            cercleHeight: obj.cercleHeight,
            translateX: obj.translateX
        }

        this.state.dimensions = dimensions
    }

    onToggle() {

        if (this.props.isOn)
            toValue = this.state.isOn ? (-this.state.dimensions.width + (this.state.dimensions.translateX)) : 0
        else
            toValue = this.state.isOn ? 0 : (this.state.dimensions.width - (this.state.dimensions.translateX))
        Animated.timing(
            this.state.offsetX,
            {
                toValue: toValue,
                duration: 300,
            }
        ).start();

        let newState = !this.state.isOn

        this.setState({
            ...this.state,
            isOn: newState
        })

        this.props.onToggle(newState)
    }

    render() {
        return (
            <View style={styles.container}>
                {(this.props.label) ?
                    <Text style={[styles.labelStyle, this.props.labelStyle]}>
                        {this.props.label}
                    </Text> : null
                }
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        width: this.state.dimensions.width,
                        borderRadius: this.state.touchView.borderRadius,
                        padding: this.state.dimensions.padding,
                        backgroundColor: (this.state.isOn) ? this.props.onColor : this.props.offColor
                    }}
                    activeOpacity={this.state.touchView.activeOpacity}
                    onPress={this.onToggle.bind(this)}
                >
                    <Animated.View
                        style={{
                            margin:this.state.animatedView.margin,
                            transform: [{translateX: this.state.offsetX}],
                            position: 'absolute', ...this.state.initialDirection,
                            width: this.state.dimensions.cercleWidth,
                            height: this.state.dimensions.cercleHeight,
                            borderRadius: (this.state.dimensions.cercleWidth / 2),
                            backgroundColor: this.state.animatedView.backgroundColor
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelStyle: {
        marginHorizontal: 10,
    }
});

export default ToggleSwitch