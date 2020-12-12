
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- <videojs width="400" controls>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</videojs> -->
  <!-- <video ref="Player"  id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
  </video> -->

   <!-- <VideoJS title="Video of Puppies"

             src="https://www.youtube.com/watch?v=N3ugtRtZE0s"

             type="video/youtube"/> -->


      <input type='file'  @change="openFile" />

             <div class="video-inner-container">
            <div :class="srcVideo">
      <video

        id="vid1"

        controls

        preload="auto" width="640" height="264"

        class="video-js vjs-fluid vjs-default-skin vjs-big-play-centered"

        data-setup='{}'
        :src-t="srcVideo"

        >

           <source :src="srcVideo" />

      </video>
      </div>

    </div>
</div>
</template>

<script>
// import videojs from 'video.js'
// import {VideoJS} from './VideoJS'

import "video.js/dist/video-js.min.css";

import "video.js/dist/video.min.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      srcVideo: "",
    };
  },
  methods: {
    openFile: function (event) {
      var input = event.target.files[0];
      var reader = new FileReader();
      var url = URL.createObjectURL(input);
      console.log('url', url);
      reader.onload = () => {
        var dataURL = reader.result;
        this.srcVideo = "//vjs.zencdn.net/v/oceans.mp4";
        console.log(dataURL);
        this.msg = this.srcVideo;
      };
      reader.readAsDataURL(input);
    },
  },

  mounted: function () {
    // var file = new File()
    this.srcVideo = "data:video/mp4;base64,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";
    //     var player = videojs(this.$refs.Player, options, function onPlayerReady() {
    //   videojs.log('Your player is ready!');
    //   // In this context, `this` is the player that was created by Video.js.
    //   this.play();
    //   // How about an event listener?
    //   this.on('ended', function() {
    //     videojs.log('Awww...over so soon?!');
    //   });
    // });
    //  var reader = new FileReader();
    //  reader.onload = function(){
    //       var dataURL = reader.result;
    //       this.srcVideo = dataURL;
    //     };
    //     reader.readAsDataURL('D:/Vue/oceans.mp4');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
