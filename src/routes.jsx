import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import App from './containers/App.jsx'
import MainLayout from './components/MainLayout.jsx'
import VideosList from './components/VideosList.jsx'
import VideoPage from './components/VideoPage.jsx'
import NotFound from './components/NotFound.jsx'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRedirect to='/videos/video/golos' />
            <Route component={MainLayout}>
                <Route path='/videos/video/:videoid' component={VideoPage} />
                <Route path='/videos/list' component={VideosList} />
            </Route>
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);
