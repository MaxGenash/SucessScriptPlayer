import React, { Component } from 'react'
import VideoPlayer from './VideoPlayer.jsx'
import VideoDescription from './VideoDescription.jsx'
import VideoMomentsList from './VideoMomentsList.jsx'

export default class VideoColumn extends Component {
    render() {
        if (this.props.isGettingVideoInfo)
            return (
                <div className="video-wrapper">
                    <div className="loading">
                        <i className="fa fa-spin fa-spinner fa-5x fa-fw" aria-hidden="true" />
                    </div>
                </div>
            );
        else if (this.props.getVideoInfoSuccess && this.props.videoSrc && this.props.videoImgPoster && this.props.videoCaption)
            return (
                <div className="video-wrapper">
                    <h1>
                        {this.props.videoCaption}
                    </h1>
                    <VideoPlayer
                        setVideoJsInstance={this.props.setVideoJsInstance}
                        videoSrc={this.props.videoSrc}
                        videoImgPoster={this.props.videoImgPoster}
                    />
                    <VideoMomentsList
                        videoMomentsList={this.props.videoMomentsList}
                        scrollVideoToTime={this.props.scrollVideoToTime}
                        toggleExpandMomentsList={this.props.toggleExpandMomentsList}
                        expandMomentsList={this.props.expandMomentsList}
                    />
                    <VideoDescription
                        videoDescription={this.props.videoDescription}
                    />
                    <section className="comments-wrapper">
                        <p>
                            <b>Коментарі:</b>
                        </p>
                        <div className="comments">
                            {this.props.comments}
                        </div>
                    </section>
                </div>
            );
        else if (this.props.getVideoInfoError)
            return (
                <div className='video-wrapper'>
                    При отриманні інформації про відео сталася помилка:
                    <br/>
                    {this.props.getVideoInfoError}
                </div>
            );
        else
            return (
                <div className='video-wrapper'>
                    При отриманні інформації про відео сталася невідома помилка :(
                </div>
            );
    }
}
