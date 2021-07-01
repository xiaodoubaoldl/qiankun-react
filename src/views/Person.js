import React from 'react';
import actions from "@/shared/action";


export default class Person extends React.Component {
  constructor (props) {
    super(props)
    this.actions = actions
  }
  componentDidMount () {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange((state, prev)=> {
      console.log('子应用', state, prev);
      if (state.actions === 'sonSetMap') {
        // var center = window.map.getCenter();
        // window.map.flyTo({
        //   center: [center.lng + (Math.random() - 0.5) * 0.2,
        //       center.lat + (Math.random() - 0.5) * 0.2],
        //   zoom: state.data,
        //   bearing: 10,
        //   pitch: 30,
        //   duration: 2000
        // });
        console.log(state.data)
      }
    })
  }
  handleClick () {
    // actions.setGlobalState({ actions: 'setZoom', data: 12 })
    // 创建事件对象
    // let event = new CustomEvent('custom', {
    //     // 这里可直接传入 自定义的事件参数
    //     detail: {
    //         height: 100,
    //         widht: 100,
    //         rect: 10000
    //     }
    // })
    // // 同样 我们也可以直接在事件对象上绑定 参数
    // event.name = 'custom-event'
    // window.dispatchEvent(event)
  }
  handleClickS () {
    actions.setGlobalState({ actions: 'setBearing', data: 90 })
  }
  render () {
    return (
        <div>
          <button onClick={() => this.handleClick()}>子应用逻辑1</button>
          <button onClick={() => this.handleClickS()}>子应用逻辑2</button>
        </div>
    )
  }
}