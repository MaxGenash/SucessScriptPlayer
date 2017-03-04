import React, { Component } from 'react'
import VideoPlayer from './VideoPlayer.jsx'

export default class VideoColumn extends Component {
    render() {
        return (
            <div className="video-wrapper">
                <h1>
                    {this.props.videoCaption}
                </h1>
                <VideoPlayer
                    videoSrc={this.props.videoSrc}
                    videoImgPoster={this.props.videoImgPoster}
                />
                <p>
                    <b>Опис:</b>
                    <br/>
                    {this.props.videoDescription}
                </p>
                <section className="comments-wrapper">
                    <p>
                        <b>Коментарі:</b>
                    </p>
                    <div className="comments">
                        {this.props.comments}
                    </div>
                </section>
            </div>
        )
    }
}
