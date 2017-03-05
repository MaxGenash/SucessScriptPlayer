import React, { Component } from 'react'
import parseTime from "../utils/parseTime"

export default function VideoDescription (props) {
    if((props.videoMomentsList instanceof Array) && props.videoMomentsList.length) {
        let momentsList = props.videoMomentsList.map((dataItem, i) => {
            return (
                <li key={dataItem.time}>
                    <a
                        href="javascript:void(0)"
                        onClick={() => props.scrollVideoToTime(dataItem.time)}
                        className="video-thumb video-thumb--moment"
                    >
                        <img src={dataItem.imgThumbUri} alt="фото моменту" className="video-tumb-img" />
                        <div className="video-thumb-cont">
                        <span className="video-thumb-title">
                            {dataItem.title}
                        </span>
                            <span className="video-thumb-descr">
                            <span className="video-thumb-num video-thumb-num--moment">
                                {parseTime(dataItem.time)}
                            </span>
                        </span>
                        </div>
                    </a>
                </li>
            );
        });
        return (
            <section className="addit-inform-wrapper">
                <div className="addit-inform">
                    <a
                        href="javascript:void(0)"
                        className="toggle-info"
                        title="Клікніть для відкриття/закртиття списку позначених моментів на відео"
                        onClick={props.toggleExpandMomentsList}
                    >
                        Моменти на відео {" "}
                        <i className="fa fa-sort-desc fa-fw" aria-hidden="true" />
                    </a>
                    <ul className={`list-info ${props.expandMomentsList ? "is-opened" : ""}` }>
                        {momentsList}
                    </ul>
                </div>
            </section>
        );
    } else {
        return (
            <div></div>
        );
    }
}
