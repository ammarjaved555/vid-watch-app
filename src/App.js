import React, { Component } from 'react'
import youtube from './apis/youtube'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'


export default class App extends Component {
state={ videos: [], selectedVideo: null}

componentDidMount(){
 this.onTermSubmit('')   
}

    onTermSubmit= async (term)=>{
     const response = await  youtube.get('/search',{
        params: {
            q:term
        } 
        })
        this.setState ({videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(response)
    };
    onVideoSelect =(video)=>{
        this.setState({selectedVideo: video})
    }
    
    
  render() {
    return (
      <>
      
      <div className="ui inverted menu">
          <div className="item">
          <img src="./video.png" />
           </div>
          <a className="item">Home</a>
          <a className="item">About</a>
          </div>

        <div>
        <h2 class="ui center aligned header">
  <img class="ui image" src="./logo.png" />
  <div class="content">
  Vid-Watch
  </div>
</h2> 
        </div>
      <div className="ui container" >
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid" >
        <div className="ui row" >
        <div className='eleven wide column'>
        <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className='five wide column'>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>
        </div>
        </div>
        </div>
        </>
    )
  }
}
