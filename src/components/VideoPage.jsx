import React, { Component } from 'react'
import VideoPlayer from './VideoPlayer.jsx'
import URI_GET_VIDEO_INFO from '../constants/API_URIs'

export default class VideoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGettingVideoInfo: false,
            getVideoInfoSuccess: true,
            getVideoInfoError: "",

           // videoSrc: "",
            videoSrc: "/golos.mp4",
           // videoImgPoster: "",
            videoImgPoster: "/src/StaticMarkup/golos_screen.jpg",
            videoCaption: "Голос країни",
            videoDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda, aut dicta dolore doloribus eligendi, esse excepturi inventore ipsa laborum maxime mollitia neque omnis placeat quae, qui quidem quos reiciendis repellat veritatis! Molestiae officia ratione veniam vitae voluptatibus voluptatum? Adipisci delectus doloremque dolores ducimus, enim error iure labore libero nesciunt numquam qui recusandae similique, sint? Alias consequuntur dignissimos esse molestias qui ut voluptas. Ab accusamus ad animi aperiam asperiores aut blanditiis consequuntur corporis, cupiditate debitis dolore doloribus ea ex expedita hic id inventore iusto labore laudantium maiores molestiae neque officiis praesentium, provident quae quam rem repellendus rerum suscipit ullam veniam!"
        };
    }


    getVideoInfoById = (videoid) => {
        this.setState(prevState => ({
            isGettingVideoInfo: true,
            getVideoInfoSuccess: false,
            getVideoInfoError: "",
        }));

        return fetch( URI_GET_VIDEO_INFO + videoid, /*{
            credentials: 'include',
            mode: 'cors',
            method: 'get',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': access_token ? 'Bearer ' + access_token : ""
                //'X-CSRFToken': CSRF_TOKEN
            }
        }*/)
            .then( response => {
                if(!response.ok)
                    throw `Не вдалося отримати інформацію про відео!`;

                let contentType = response.headers.get("content-type");
                if(contentType && contentType.indexOf("application/json") !== -1)
                    return response.json();
                else
                    throw `Отримано некоректні від сервера`;
            })
            .then( data => {
                // if (!(data instanceof Array) && !(data.idNameResponses instanceof Array))
                //     throw `Отримано некоректні дані для списку ${listName}`;

                this.setState(prevState => ({
                    isGettingVideoInfo: false,
                    getVideoInfoSuccess: true,
                    getVideoInfoError: "",
                    videoSrc: data.videoSrc,
                    // videoImgPoster: "",
                    videoImgPoster: data.videoImgPoster,
                    videoCaption: data.videoCaption,
                    videoDescription: data.videoDescription
                }));
            })
            .catch( error =>  {
                if(error && error.message === "Failed to fetch")
                    error = `Сталася неочікувана помилка при отриманні інформації про відео! Перевірте роботу мережі.`;
                else if(!error || !(typeof error == "string"))
                    error = `Сталася неочікувана помилка при отриманні інформації про відео!`;

                this.setState(prevState => ({
                    isGettingVideoInfo: false,
                    getVideoInfoSuccess: false,
                    getVideoInfoError: error,
                }));
            });
    };

    componentDidMount() {
        let videoId = this.props.params.videoid;
        this.getVideoInfoById(this.props.params.videoId);
    }

    render() {
        if(this.state.isGettingVideoInfo)
            return (
                <div className=''>
                    Отримання інформації про відео...
                </div>
            );
        else if(this.state.getVideoInfoSuccess && this.state.videoSrc && this.state.videoImgPoster && this.state.videoCaption)
            return (
                <div className=''>
                    <h1>
                        Назва: {this.state.videoCaption}
                    </h1>
                    <VideoPlayer
                        videoSrc={this.state.videoSrc}
                        videoImgPoster={this.state.videoImgPoster}
                    />
                    <p>
                        Опис:
                        <br/>
                        {this.state.videoDescription}
                    </p>
                </div>
            );
        else if(this.state.getVideoInfoError)
            return (
                <div className=''>
                    При отриманні інформації про відео сталася помилка:
                    <br/>
                    {this.state.getVideoInfoError}
                </div>
            );
        else
            return (
                <div className=''>
                    При отриманні інформації про відео сталася невідома помилка :(
                </div>
            );
    }
}
