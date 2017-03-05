import React, { Component } from 'react'

export default function VideoDescription (props) {
    return (
        <section className="description-wrapper">
            <p>
                <b>Опис:</b>
            </p>
            <div className="description">
                {props.videoDescription}
            </div>
        </section>
    );
}
