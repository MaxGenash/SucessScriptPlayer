import React, {Component} from "react";

export default function RecomendationsListFeatured(props) {
    if(props.isGettingFeaturedVideos)
        return (
            <div className="recomendation-videos recomendation-videos--featured">
                <h2 className="recomendation-title">Популярні зараз:</h2>
                <div className="loadingblock--sm">
                    Завантаження...
                </div>
            </div>
        );
    else if(props.getFeaturedVideosError || !(props.listData instanceof Array)) {
        let errorMsg = props.getFeaturedVideosError || "Сталася неочікувана помилка при отриманні інформації про популярні відеозаписи";
        return (
            <div className="recomendation-videos recomendation-videos--featured">
                <h2 className="recomendation-title">
                    Популярні зараз:
                </h2>
                <div className="error-alert">
                    {errorMsg}
                </div>
            </div>
        );
    }
    else {
        let itemsList = props.listData.map((dataItem, i) => {
            return (
                <li key={dataItem.key}>
                    <a href={`/videos/video/${dataItem.key}`} className="video-thumb">
                        <img src={dataItem.imgPosterSrc} alt="картинка-постер" className="video-tumb-img"/>
                        <div className="video-thumb-cont">
                        <span className="video-thumb-title">
                            {dataItem.title}
                        </span>
                            <span className="video-thumb-descr" title="Загальна кількість переглядів">
                            <i className="fa fa-eye fa-1" aria-hidden="true"/>
                            <span className="video-thumb-num">{dataItem.overallViews}</span>
                        </span>
                            <span className="video-thumb-descr" title="Кількість активних глядачів онлайн">
                            <i className="fa fa-users" aria-hidden="true"/>
                            <span className="video-thumb-num">{dataItem.activeViews}</span>
                        </span>
                        </div>
                    </a>
                </li>
            );
        });
        return (
            <div className="recomendation-videos recomendation-videos--featured">
                <h2 className="recomendation-title">Популярні зараз:</h2>
                <ul className="videos-list">
                    {itemsList}
                </ul>
            </div>
        );
    }
}
