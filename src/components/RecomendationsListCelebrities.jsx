import React, {Component} from "react";
import NavLink from "./NavLink.jsx"
import moment from 'moment'

export default function RecomendationsListCelebrities(props) {
    /*
     "uniqueCode": "59654341_6833",
     "imgPosterSrc": "https://svvideoservice.blob.core.windows.net/videos/golos.jpg",
     "celebrityName": "Максим Генаш",
     "comentText": "\nЩойно подивився новий випуск ліги сміху - відбірний гумор 4 😆😆😆 \nhttps://ovva.tv/ua/liga-smeha/3-sezon/2-vypusk-full \nlocalhost:2018/videos/video/ligaSmihu \nhttp://localhost:2018/videos/video/ligaSmihu",
     "celebrityAvatar": "https://pp.userapi.com/c636531/v636531341/35123/RKMPCvEdsOY.jpg",
     "postDate": "2017-03-05T10:43:23.067",
     "originalPostLink": "https://vk.com/wall59654341_6833",
     "videoKey": "ligaSmihu"

    */

    //isGettingCelebritiesRecomendations
    //getCelebritiesRecomendationsError

    if(props.isGettingFeaturedVideos)
        return (
            <div className="recomendation-videos recomendation-videos--stars">
                <h2 className="recomendation-title">
                    Зірки рекомендують:
                </h2>
                <div className="loadingblock--sm">
                    Завантаження...
                </div>
            </div>
        );
    else if(props.getFeaturedVideosError || !(props.listData instanceof Array)) {
        let errorMsg = props.getFeaturedVideosError || "Сталася неочікувана помилка при отриманні рекомендацій від зірок";
        return (
            <div className="recomendation-videos recomendation-videos--stars">
                <h2 className="recomendation-title">
                    Зірки рекомендують:
                </h2>
                <div className="error-alert">
                    {errorMsg}
                </div>
            </div>
        );
    } else {
        let itemsList = props.listData.map((dataItem, i) => {
            return (
                <li key={dataItem.uniqueCode}>
                    <NavLink to={`/videos/video/${dataItem.videoKey}`} className="video-thumb" >
                        <img src={dataItem.imgPosterSrc} alt="картинка-постер" className="video-tumb-img"/>
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
                                {moment(dataItem.postDate).format("DD.MM.YYYY")} {" "}
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


}
