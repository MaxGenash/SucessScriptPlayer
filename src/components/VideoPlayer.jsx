import React, { Component } from 'react'
import videojs from 'video.js'

export default class VideoPlayer extends Component {
    componentDidMount() {
        videojs('ss-player__video', {
            controls: true,
            autoplay: false,
            preload: 'auto'
        });
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
