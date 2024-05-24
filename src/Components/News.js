import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-4'>
       <h1>UpdateToday - Top Headlines</h1>
       <div className="row">
        <div className="col-md-4">
        <NewsItem/>
        </div>
        <div className="col-md-4">
        <NewsItem title="mytitle" description = "mydesc"/>
        </div>
        
        </div>
      </div>
    )
  }
}

export default News
