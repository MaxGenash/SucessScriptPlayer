import React, {Component} from "react";
import NavLink from "./NavLink.jsx"

export default function RecomendationsListCelebrities(props) {
    let itemsList = props.listData.map((dataItem, i) => {
        return (
            <li key={dataItem.videoKey}>
                <NavLink to={`/videos/video/${dataItem.key}`} className="video-thumb" >
                    <img src={dataItem.previewUri} alt="картинка-постер" className="video-tumb-img"/>
                    <div className="video-thumb-cont">
                        <span className="video-thumb-star">
                            <div className="avatar-wrap">
                                <img className="video-thumb-avatar" src={dataItem.celebrityAvatar} alt="фото зірки"/>
                            </div>
                            <span className="video-thumb-star-name" title={dataItem.celebrityName}>
                                {dataItem.celebrityName}
                            </span>
                        </span>
                        <span className="video-thumb-post" title={dataItem.comentText}>
                            {dataItem.comentText}
                        </span>
                        <a className="post-link" href={dataItem.originalPostLink} target="_blank">
                            <span title="Дата публікації">
                                22.03.2017 {" "}
                            </span>
                            <span title="Посилання на оригінал публікації">
                                <i className="fa fa-vk" aria-hidden="true" />
                            </span>
                        </a>
                    </div>
                </NavLink>
            </li>
        );
    });

    return (
        <div className="recomendation-videos recomendation-videos--stars">
            <h2 className="recomendation-title">
                Зірки рекомендують:
            </h2>
            <ul className="videos-list">
                {itemsList}
            </ul>
        </div>
    );
}
