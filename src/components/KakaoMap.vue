<template>
    <div>
        <div id="map" style="width: 380px; height: 400px"></div>
    </div>
</template>
<script>
export default {
    name: "kakaoMap",
    data() {
        return {
            markerPositions1: [
        [33.452278, 126.567803],
        [33.452671, 126.574792],
        [33.451744, 126.572441],
      ]
        };
    },
    mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fb2375a994a81c872839982b1911cc1a";
      document.head.appendChild(script);
    }
  },
    methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng( 37.551717026235, 127.09333128917),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
      this.displayMarker(options.center);
    },
    displayMarker(locPosition, message="회사") {
      // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: this.map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(marker.map);
    
      
}    
    },


}
</script>
<style>
    
</style>