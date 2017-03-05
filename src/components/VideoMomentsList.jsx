import React, { Component } from 'react'

export default function VideoDescription (props) {
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
                    <li>
                        <a href="" className="video-thumb video-thumb--moment">
                            <img src="./golos_screen.jpg" alt="video" className="video-tumb-img" />
                            <div className="video-thumb-cont">
                                <span className="video-thumb-title">Учасник 22.</span>
                                <span className="video-thumb-descr">
                                    <span className="video-thumb-num video-thumb-num--moment">17:00</span>
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
