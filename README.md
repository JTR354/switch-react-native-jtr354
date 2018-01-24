Toggle Switch Component for react native, it works on iOS and Android.

## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

* 1.Run `npm i toggle-switch-rn --save`
* 2.`import ToggleSwitch from 'toggle-switch-rn'`

## Demo
* [Example](https://github.com/aminebenkeroum/toggle-switch-react-native/tree/master/example)

![Screenshots](https://raw.githubusercontent.com/aminebenkeroum/toggle-switch-react-native/master/example/Screenshots/Screenshot.gif)

## Getting started  

To Get Started, Import `toggle-switch-rn` to your js file.

`import ToggleSwitch from 'toggle-switch-rn'`

Inside your component's render method, or any other method returning views, use ToggleSwitch:   

```javascript

const unit = {
    w:Bone.size.width/100,
    h:Bone.size.height/100
}
const swithSize = {
    width: unit.w*17,
    padding: unit.w*4,
    cercleWidth: unit.w*7.5,
    cercleHeight: unit.w*7.5,
    translateX: unit.w*7.8,
}

< ToggleSwitch
    isOn={
        false
    }
    onColor='#1678FF'
    offColor='#A7AAB0'
    size={
        this.size
    }
    animatedView={
        {
            margin: 1,
            backgroundColor: '#fff'
        }
    }
    touchView={
        {
            borderRadius: 100,
            activeOpacity: 1
        }
    }
    onToggle={
        (isOn) => console.log('changed to : ', isOn)
    }
/>
```

## API

Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
isOn  | Boolean  | true | 'false'  |   Default state, true for On, false for off
onColor | String |true |  '#634fc9' | On Color
offColor  |  String | true | '#ecf0f1' | Off Color
label | String| true |   | Custom Label Text on the Left of the toggle Button
labelStyle | Object | true | {marginHorizontal: 10}  | Custom Styling for the Label Text View
size | Object | true |  {} | {}
onToggle | Function Callback | false |  none | Callback when the toggle switch component changes the state, params: isOn
animatedView| 定义滑动块样式|
touchView| 定义switch容器样式
## Contribution

If you encountered an Issue, please add a screenshot of the bug or a code snippet. 

Quickest way to solve issue is to reproduce it on the example project

Pull requests are welcome. If you want to change the API or imporove something, feel free to create an issue and discuss it first.

由于不能修改样式所以修改了一下
---------------

**MIT Licensed**