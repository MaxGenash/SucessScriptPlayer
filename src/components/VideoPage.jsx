import React, {Component} from 'react'
import VideoColumn from './VideoColumn.jsx'
import RecomendationsCol from './RecomendationsCol.jsx'
import {
    URI_GET_VIDEO_INFO,
    URI_GET_FEATURED_VIDEOS
} from '../constants/API_URIs'

export default class VideoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGettingVideoInfo: true,
            getVideoInfoSuccess: false,
            getVideoInfoError: "",

            // videoSrc: "",
            videoSrc: "",
            // videoImgPoster: "",
            videoImgPoster: "",
            videoCaption: "",
            videoDescription: "",
            videoPublicationDate: "",
            videoMomentsList: [
                // {
                //     title: 'Виступ команди "Лукас"',
                //     time: 857,
                //     imgThumbUri: "https://1drv.ms/i/s!Ah55HJR0qRwUh6JTu2SXrrsSmvtlpA"
                // },
            ],

            videoJsInstance: null,

            videoComments: `
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque deserunt doloremque ducimus est iure libero, officia, perspiciatis praesentium provident quidem recusandae reiciendis rem sequi ullam unde voluptas. Assumenda cum deserunt earum fugiat iste labore laudantium placeat quasi tempore voluptatum? Architecto deserunt earum, hic iste minus nobis quas quod ratione sit voluptas. A ad adipisci aliquid aperiam architecto beatae cupiditate delectus dolore dolorem doloremque ea eius enim excepturi expedita ipsum, iusto laborum libero mollitia, necessitatibus nesciunt nostrum odio officiis pariatur porro possimus quaerat qui quibusdam, quidem saepe suscipit totam unde vero voluptatem. Assumenda consequuntur cupiditate delectus deleniti, fuga inventore labore laborum neque nobis obcaecati odio omnis quasi recusandae repudiandae saepe sed sint suscipit tempore tenetur voluptas. Deleniti, fugiat, molestiae. Corporis, laborum, vero. Atque cupiditate deleniti, ducimus eius eum fugit id illum ipsum iste modi, nam numquam, obcaecati quam quo recusandae rem temporibus ullam voluptatem! Adipisci assumenda aut deleniti dolorum error eveniet, excepturi expedita facilis hic incidunt ipsa ipsum iste iure labore maxime mollitia nemo neque nesciunt, nihil nulla officia quaerat quas quis tempore velit veritatis voluptas. A animi at autem beatae, consequatur eligendi facere fugit hic, illum iusto minus molestias natus nesciunt nihil nisi nulla omnis optio pariatur praesentium quaerat quam quibusdam quo reiciendis sapiente sed sint sit suscipit tempore velit voluptate? Adipisci aliquam, assumenda atque blanditiis commodi consectetur debitis delectus deleniti distinctio dolorum eius eligendi est eum fugiat fugit id impedit incidunt inventore ipsa maxime nam natus nisi non officiis pariatur placeat possimus quod ratione repellat repudiandae rerum sapiente sed voluptatum! A alias amet animi asperiores aspernatur assumenda aut consectetur deleniti dolor dolorum ea, error eveniet excepturi, facere fugit laborum modi nam natus nemo non obcaecati officiis, omnis placeat quaerat quam qui ratione recusandae sapiente sequi tempore ut vitae voluptas voluptatem? Distinctio facilis hic illum labore minus nesciunt nobis sapiente tempore! Accusamus atque consectetur consequuntur culpa cumque cupiditate debitis dignissimos dolores doloribus ea error esse et exercitationem facere facilis fuga ipsam laboriosam magnam maiores molestiae mollitia nam obcaecati odio odit officia pariatur placeat quia quis, recusandae rem rerum sint veniam voluptatum! Atque esse eveniet hic illo itaque magnam pariatur, placeat provident repellat. Culpa dolorem et, eum facere iste natus sint veniam? Autem, commodi consequatur debitis dolore, doloribus ducimus enim ex fuga fugiat illo ipsum iure minima nam necessitatibus nihil obcaecati officia porro praesentium quae quam qui ratione recusandae repudiandae sapiente sint ullam voluptate. Accusantium error fugiat illo laboriosam maxime nam officia quisquam ratione unde voluptates? Alias cupiditate dignissimos iure modi quisquam! Beatae delectus dolorem, est fugit id, ipsum iusto omnis quis quisquam ratione reiciendis vel veritatis. Adipisci laboriosam quisquam velit? Cupiditate, nostrum, rem? Cum delectus est eveniet, exercitationem explicabo, in magni officiis perferendis quidem ratione reprehenderit tempora, veniam? Aliquam animi, atque consequatur delectus dolores ducimus ex hic labore numquam pariatur placeat provident quo ratione repudiandae, sunt ut veniam. Accusamus animi, deserunt dolor est illo iusto magni, maiores nam necessitatibus nobis praesentium quaerat quia ratione recusandae rerum! Animi, aut corporis debitis expedita facere minima minus necessitatibus officiis quidem quis rerum.
            `,

            getFeaturedVideosError: "",
            isGettingFeaturedVideos: true,
            numOfShowingFeaturedVideos: 3,
            featuredVideos: [
                // {
                //     previewUri: "https://1drv.ms/i/s!Ah55HJR0qRwUh6JTu2SXrrsSmvtlpA",
                //     overallViews: 17500,
                //     activeViews: 875,
                //     title: "Голос країни 7 сезон 6 випуск за 26 лютого 2017 року",
                //     key: "golos"
                // }

            ],

            celebritiesRecomendations: [
                {
                    previewUri: "https://1drv.ms/i/s!Ah55HJR0qRwUh6JTu2SXrrsSmvtlpA",
                    celebrityName: "Джамала",
                    comentText: "Дивіться новий випуск голоса країни та голосуйте за моїх учасників 💋💋💋",
                    celebrityAvatar: "https://1drv.ms/i/s!Ah55HJR0qRwUh6JTu2SXrrsSmvtlpA",
                    postDate: "04.03.2017",
                    originalPostLink: "https://vk.com/wall59654341_6826",
                    videoKey: "golos"
                },
                {
                    previewUri: "https://1drv.ms/i/s!Ah55HJR0qRwUh6JTu2SXrrsSmvtlpA",
                    title: "Лига Смеха 2016 - второй фестиваль, Одесса, часть первая",
                    celebrityName: "Володимир Зеленський",
                    comentText: "Сьогодні подивився новий випуск ліги сміху - ото ржака 😆😆😆",
                    celebrityAvatar: "https://1drv.ms/i/s!Ah55HJR0qRwUh6JTu2SXrrsSmvtlpA",
                    postDate: "02.03.2017",
                    originalPostLink: "https://vk.com/wall59654341_6826",
                    key: "ligaSmihu"
                }
            ],

            expandMomentsList: false
        };
    }

    getVideoInfoById = (videoId) => {
        this.setState(prevState => ({
            isGettingVideoInfo: true,
            getVideoInfoSuccess: false,
            getVideoInfoError: "",
        }));

        return fetch(URI_GET_VIDEO_INFO + videoId/*, /*{
         credentials: 'include',
         mode: 'cors',
         method: 'get',
         headers: {
         'Content-Type': 'application/json; charset=UTF-8',
         'Authorization': access_token ? 'Bearer ' + access_token : ""
         //'X-CSRFToken': CSRF_TOKEN
         }
         }*/)
            .then(response => {
                if (!response.ok)
                    throw `Не вдалося отримати інформацію про відео!`;

                let contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1)
                    return response.json();
                else
                    throw `Отримано некоректні від сервера`;
            })
            .then(data => {
                if (!(data.videos instanceof Array) || !data.videos[0])
                    throw `Отримано некоректні дані від сервера`;

                this.setState(prevState => ({
                    isGettingVideoInfo: false,
                    getVideoInfoSuccess: true,
                    getVideoInfoError: "",
                    videoSrc: data.videos[0].blobUri,
                    videoImgPoster: data.videos[0].previewUri,
                    videoCaption: data.videos[0].title,
                    videoDescription: data.videos[0].description,
                    videoPublicationDate: data.videos[0].datePost,
                    videoMomentsList: data.videos[0].videoMomentsList
                }));

                // var a = {
                //     "videos": [{
                //         "id": "495ed00d-eecc-4e3c-b2bd-9c9fcea28bd4",
                //         "key": "golos",
                //         "blobUri": "https://1drv.ms/v/s!Ah55HJR0qRwUh6JVcnIgUNQTHaDs1Q",
                //         "title": "Голос країни (Голос Украины) 7 сезон 6 випуск за 26 лютого 2017 року ",
                //         "previewUri": "https://1drv.ms/i/s!Ah55HJR0qRwUh6JTu2SXrrsSmvtlpA",
                //         "datePost": "2016-02-04T18:45:08.62",
                //         "description": "Еміль Вілонджа енергійно заспівав пісню Louis Armstrong «Let my people go» та навіть виконав невеличкий танець на головній сцені країни. Сергію Бабкіну так сподобалися голос і харизма молодого співака, що зірковий тренер запросив юнака у свою команду."
                //     }]
                // }
            })
            .catch(error => {
                if (error && error.message === "Failed to fetch")
                    error = `Сталася неочікувана помилка при отриманні інформації про відео! Перевірте роботу мережі.`;
                else if (!error || !(typeof error == "string"))
                    error = `Сталася неочікувана помилка при отриманні інформації про відео!`;

                this.setState(prevState => ({
                    isGettingVideoInfo: false,
                    getVideoInfoSuccess: false,
                    getVideoInfoError: error,
                }));
            });
    };

    getFeaturedVideos = (numOfShowingFeaturedVideos) => {
        this.setState(prevState => ({
            getFeaturedVideosError: "",
            isGettingFeaturedVideos: true,
        }));

        return fetch(URI_GET_FEATURED_VIDEOS + numOfShowingFeaturedVideos/*, /*{
         credentials: 'include',
         mode: 'cors',
         method: 'get',
         headers: {
         'Content-Type': 'application/json; charset=UTF-8',
         'Authorization': access_token ? 'Bearer ' + access_token : ""
         //'X-CSRFToken': CSRF_TOKEN
         }
         }*/)
            .then(response => {
                if (!response.ok)
                    throw `Сталася помилка при отриманні інформації про популярні відеозаписи(!response.ok)!`;

                let contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1)
                    return response.json();
                else
                    throw `Сталася помилка при отриманні інформації про популярні відеозаписи: oтримано некоректні від сервера`;
            })
            .then(data => {
                if (!(data.videos instanceof Array) || !data.videos[0])
                    throw `Сталася помилка при отриманні інформації про популярні відеозаписи: oтримано некоректні від сервера`;

                this.setState({
                    getFeaturedVideosError: "",
                    isGettingFeaturedVideos: false,
                    featuredVideos: data.videos
                });
            })
            .catch(error => {
                if (error && error.message === "Failed to fetch")
                    error = `Сталася неочікувана помилка при отриманні інформації про популярні відеозаписи! Перевірте роботу мережі.`;
                else if (!error || !(typeof error == "string"))
                    error = `Сталася неочікувана помилка при отриманні інформації про популярні відеозаписи!`;

                this.setState(prevState => ({
                    isGettingFeaturedVideos: false,
                    getFeaturedVideosError: error,
                }));
            });
    };

    componentDidMount() {
        //Отримуємо інфу про це відео
        let videoId = this.props.params.videoid;
        this.getVideoInfoById(videoId);

        //Отримуємо інфу про популярні відео
        this.getFeaturedVideos(this.state.numOfShowingFeaturedVideos);
    }

    componentWillUnmount() {
        this.ws.close()
    }

    toggleExpandMomentsList = () => {
        this.setState(prevState => ({
            expandMomentsList: !prevState.expandMomentsList
        }));
    };

    setVideoJsInstance = (videoJsInstance) => {
        this.videoJsInstance = videoJsInstance;
    };

    scrollVideoToTime = (time) => {
        this.videoJsInstance.currentTime(time);
    };

    render() {
        return (
            <div className="content-wrapper">
                <VideoColumn
                    setVideoJsInstance={this.setVideoJsInstance}
                    scrollVideoToTime={this.scrollVideoToTime}
                    isGettingVideoInfo={this.state.isGettingVideoInfo}
                    getVideoInfoSuccess={this.state.getVideoInfoSuccess}
                    getVideoInfoError={this.state.getVideoInfoError}
                    videoCaption={this.state.videoCaption}
                    videoSrc={this.state.videoSrc}
                    videoImgPoster={this.state.videoImgPoster}
                    videoMomentsList={this.state.videoMomentsList}
                    toggleExpandMomentsList={this.toggleExpandMomentsList}
                    expandMomentsList={this.state.expandMomentsList}
                    videoDescription={this.state.videoDescription}
                    comments={this.state.videoComments}
                />
                <RecomendationsCol
                    getFeaturedVideosError={this.state.getFeaturedVideosError}
                    isGettingFeaturedVideos={this.state.isGettingFeaturedVideos}
                    featuredVideos={this.state.featuredVideos}
                    celebritiesRecomendations={this.state.celebritiesRecomendations}
                />
            </div>
        );
    }
}
