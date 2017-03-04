import React, { Component } from 'react'
import { Link } from 'react-router'

export default class List extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <h3> Список відео </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='list'>
              <li className='list__item'>
                <Link to='/videos/video/golos'>відео 1</Link>
              </li>
              <li className='list__item'>
                <Link to='/videos/video/kvartal'>відео 2</Link>
              </li>
              <li className='list__item'>
                <Link to='/videos/video/liga_smihu'>відео 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
