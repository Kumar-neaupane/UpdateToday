import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          source: { id: null, name: "Android Central" },
          author: "andrew.myrick@futurenet.com (Andrew Myrick)",
          title: "I bought into the AI hype and all I got was an orange square",
          description: "Silicon Valley is home to a lot of great ideas, many of which we use today. But, trying to get in on the ground floor with a new device isn't the brightest idea.",
          url: "https://www.androidcentral.com/phones/i-bought-into-the-ai-hype-and-all-i-got-was-an-orange-square",
          urlToImage: "https://cdn.mos.cms.futurecdn.net/PyFrrdb6Rjkajnucyd5BCR-1200-80.jpg",
          publishedAt: "2024-05-24T08:00:00Z",
          content: "(Image credit: Nicholas Sutrich / Android Central)\r\nBeyond the Alphabet is a weekly column that focuses on the tech world both inside and out of the confines of Mountain View.\r\nIn what should come as… [+13013 chars]"
        },
        {
          source: { id: null, name: "MacRumors" },
          author: "Tim Hardwick",
          title: "Apple Sheds More Light on iOS 17.5 Bug That Resurfaced Deleted Photos",
          description: "Last week, some iPhone users reported that Apple's iOS 17.5 update had introduced a bug that caused old photos that were deleted to reappear in the Photos app. Apple quickly released an iOS 17.5.1 update to fix the issue, but for many users, its explanation o…",
          url: "https://www.macrumors.com/2024/05/24/apple-explains-resurfaced-deleted-photos-bug/",
          urlToImage: "https://images.macrumors.com/t/kcP2ASGW6jKCwW9dzDf03YpxYhA=/1600x/article-new/2023/05/icloud-photos.jpg",
          publishedAt: "2024-05-24T09:36:11Z",
          content: "Last week, some iPhone users reported that Apple's iOS 17.5 update had introduced a bug that caused old photos that were deleted to reappear in the Photos app. Apple quickly released an iOS 17.5.1 up… [+2025 chars]"
        },
        
       
      ],
      loading: false
    };
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-04-25&sortBy=publishedAt&apiKey=5c9560887367452baea9fd3b19fb1ac3";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:parseData.articles})
  }

  render() {
    return (
      <div className='container my-4'>
        <h1>UpdateToday - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title?element.title.slice(0,40):""}
                description={element.description?element.description.slice(0,80):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
