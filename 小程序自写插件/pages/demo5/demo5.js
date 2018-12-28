// map.js
let schoolData = require('../../utils/gis-school')
Page({
  data: {
    centerX: 113.3245211,
    centerY: 23.10229,
    scale:'10',
    markers: [],
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color:"#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    controls: [{
      id: 1,
      iconPath: '/images/location-control.png',
      position: {
        left: 0,
        top: 10,
        width: 40,
        height: 40
      },
      clickable: true
    }]
  },
  onReady: function(e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad: function() {
    console.log('地图定位！')
    let that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: (res) => {
        console.log(res)
        let latitude = res.latitude;
        let longitude = res.longitude;
        // let marker=this.createMarker(res);
        this.setData({
          centerX: longitude,
          centerY: latitude,
          markers: this.getSchoolMarkers()
        })
      }
    });
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId, schoolData[e.markerId].latitude);
    wx.openLocation({
      latitude:parseInt(schoolData[e.markerId].latitude),
      longitude: parseInt(schoolData[e.markerId].longitude),
      scale: 16,
      name: schoolData[e.markerId].name,
      address: '金平区长平路93号'
    })
  },
  controltap(e) {
    console.log(e.controlId)
    this.moveToLocation()
  },
  getSchoolMarkers() {
    let markers = [];
    for (let item of schoolData) {
      let marker = this.createMarker(item);
      markers.push(marker)
    }
    return markers;
  },
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },
  createMarker(point) {
    let latitude = point.latitude;
    let longitude = point.longitude;
    let marker = {
      iconPath: "/images/location.png",
      id: point.id || 0,
      name: point.name || '',
      latitude: latitude,
      longitude: longitude,
      width: 20,
      height: 30
    };
    return marker;
  }
})