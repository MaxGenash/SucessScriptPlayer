import React, { Component } from 'react'
import videojs from 'video.js'
//import "../../node_modules/videojs-vjsdownload/dist/videojs-vjsdownload.js"
//import "../../node_modules/videojs-vjsdownload/dist/videojs-vjsdownload.css"
//import "../../node_modules/videojs-hotkeys/videojs.hotkeys"

export default class VideoPlayer extends Component {
    componentDidMount() {
        let playerInstance = videojs('ss-player__video', {
                controls: true,
                autoplay: false,
                preload: 'auto',
                // plugins: {
                //     vjsdownload: {
                //         beforeElement: 'playbackRateMenuButton',
                //         textControl: 'Download video',
                //         name: 'downloadButton'
                //     }
                // }
            },
            function() {
                console.log('Callback video-js initiated');
                this.on('downloadvideo', function () {
                    console.log('downloadvideo triggered');
                });
            }
        );
        // playerInstance.hotkeys({
        //     volumeStep: 0.1,
        //     seekStep: 5,
        //     enableModifiersForNumbers: false
        // });
        this.props.setVideoJsInstance(playerInstance);
    }

    // destroy player on unmount
    componentWillUnmount() {
        this.props.removeVideoJsInstance();
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        let { videoSrc,imgPoster } = this.props;
        return (
            <video id="ss-player__video" className="video-js vjs-default-skin" poster={imgPoster} src={videoSrc} width="100%" height="500">
                <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank" className="vjs-hidden" hidden="hidden">supports HTML5 video</a></p>
            </video>
        )
    }
}
