<template>
  <div class="hello">
    <ul>
      <li v-for="item in list" :key="item.id">
        <img v-lazy="item">
      </li>
   </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [
        "https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg",
        "https://pic.maizuo.com/h5PicUpload/912051f592edd2db1804b37283ca1a57.jpg",
        "https://pic.maizuo.com/h5PicUpload/37a957a59a1dbe1d068cae341d10a6d7.jpg",
        "https://pic.maizuo.com/usr/movie/3e95849fae565ed163ed53f8108bf10b.jpg",
        "https://pic.maizuo.com/usr/movie/811b0bcc4a133161206052fcc2f23cbf.jpg",
        "https://pic.maizuo.com/usr/movie/b0067ed5047a7c6343de4b3206b5b6d6.jpg",
        "https://pic.maizuo.com/usr/movie/2ed414075a7229de0104d105f76a6c45.jpg"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Hello {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  z-index: 10;
  position: relative;
  z-index: 10;
  /* margin-top: 50px;
  margin-bottom: 50px; */
  top: 50px;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul > li {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
}
ul > li > img {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
