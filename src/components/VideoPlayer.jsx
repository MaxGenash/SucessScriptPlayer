import React, { Component } from 'react'
import videojs from 'video.js'

export default class VideoPage extends Component {
    componentDidMount() {
        videojs('ss-player__video', {
            controls: true,
            autoplay: false,
            preload: 'auto'
        });
    }

    render() {
        let { caption, videoSrc,imgPoster } = this.props;
        return (
            <div className='ss-player'>
                <video id="ss-player__video" poster={imgPoster} src={videoSrc} width="640" height="480" >
                    <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank" className="vjs-hidden" hidden="hidden">supports HTML5 video</a></p>
                </video>
            </div>
        )
    }
}
