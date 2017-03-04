import React, {Component} from 'react'
import RecomendationsListFeatured from './RecomendationsListFeatured.jsx'
import RecomendationsListCelebrities from './RecomendationsListCelebrities.jsx'

export default function RecomendationsCol(props) {
    return (
        <div className="recomendations-wrapper">
            <RecomendationsListFeatured
                listData={props.featuredVideos}
            />
            <RecomendationsListCelebrities
                listData={props.celebritiesRecomendations}
            />
        </div>
    );
}
