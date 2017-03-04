import React, {Component} from "react";

export default function RecomendationsListCelebrities(props) {
    let itemsList = props.listData.map((dataItem, i) => {
        return (
            <li key={dataItem.key}>
                <a href={`/videos/video/${dataItem.key}`} className="video-thumb">
                    <img src={dataItem.imgPosterSrc} alt="картинка-постер" className="video-tumb-img"/>
                    <div className="video-thumb-cont">
                        <span className="video-thumb-star">
                            <div className="avatar-wrap">
                                <img className="video-thumb-avatar" src={dataItem.celebrityAvatar} alt="фото зірки"/>
                            </div>
                            <span className="video-thumb-star-name">
                                {dataItem.celebrityName}
                            </span>
                        </span>
                        <span className="video-thumb-post">
                            {dataItem.comentText}
                        </span>
                        <span className="video-thumb-descr">
                            <span className="Дата публікації">
                                {dataItem.postDate}
                            </span>
                            {" "}
                            <span className="Посилання на оригінал публікації">
                                <a href={dataItem.originalPostLink}>L</a>
                            </span>
                        </span>
                    </div>
                </a>
            </li>
        );
    });

    return (
        <div className="recomendation-videos recomendation-videos--stars">
            <h2 className="recomendation-title">
                Рекомендації зірок:
            </h2>
            <ul className="videos-list">
                {itemsList}
            </ul>
        </div>
    );
}
