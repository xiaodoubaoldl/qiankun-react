
/* eslint-disable */
import React from 'react';
import './Home.css'


export default class Home extends React.Component {
    render() {
        return (
            <div id="mapBox">
              
            </div>
        )
    }
    componentDidMount () {
      /**
     * 全局参数设置
     */
       if (window.__POWERED_BY_QIANKUN__) {
         minemap.domainUrl = 'https://minedata.cn'
         minemap.dataDomainUrl = 'https://minedata.cn'
         minemap.serverDomainUrl = 'https://minedata.cn'
         minemap.spriteUrl = 'https://minedata.cn/minemapapi/v2.1.0/sprite/sprite'
         minemap.serviceUrl = 'https://mineservice.minedata.cn/service/'
   
         minemap.key = '16be596e00c44c86bb1569cb53424dc9'
         minemap.solution = 12877
   
         var map = new minemap.Map({
           container: 'mapBox',
           style: 'https://mineservice.minedata.cn/service/solu/style/id/12877',
           center: [116.46, 39.92],
           zoom: 10,
           pitch: 0,
           maxZoom: 17,
           minZoom: 3,
           projection: 'MERCATOR'
         })
       }
    }
}