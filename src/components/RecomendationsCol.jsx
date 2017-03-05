import React, {Component} from 'react'
import RecomendationsListFeatured from './RecomendationsListFeatured.jsx'
import RecomendationsListCelebrities from './RecomendationsListCelebrities.jsx'

export default function RecomendationsCol(props) {
    return (
        <div className="recomendations-wrapper">
            <RecomendationsListFeatured
                getFeaturedVideosError={props.getFeaturedVideosError}
                isGettingFeaturedVideos={props.isGettingFeaturedVideos}
                listData={props.featuredVideos}
            />
            <RecomendationsListCelebrities
                listData={props.celebritiesRecomendations}
            />
        </div>
    );
}
