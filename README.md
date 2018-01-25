# Switch Component for react native, it works on iOS and Android.

## [github地址](https://github.com/JTR354/switch-react-native-jtr354.git)
* 基于View样式改变实现switch功能

## Installation

 * `npm i toggle-switch-rn --save`
 * `import Switch from 'toggle-switch-rn'`

## Demo

```javascript

<Switch
    isOn={this.state.resetSwitch * 1}
    animationType={0}
    change={() => {
        const resetSwitch = !(this.state.resetSwitch * 1)
        this.setState({ resetSwitch })
        this._changReset.call(this, resetSwitch)
    }}
/>
```

## API
|属性值|作用|是否装配|备注|
|:--:|:--:|:--:|:--:|
|isOn|开关状态|是||
|change|开关改变后的方法|是||
|animationType|开关动画效果|否|默认0：spring
|boxStyle|容器样式|否||
|boxIsOnStyle|开启时容器的样式|否||
|switchStyle|按钮的样式|否||

- 属性默认值：
```js
//动画效果类型
const animationType = [
    LayoutAnimation.spring,
    LayoutAnimation.linear,
    LayoutAnimation.easeInEaseOut
]

//默认样式
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

```

**MIT Licensed**