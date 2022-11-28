import React from 'react'

const VideoDetail=({video})=> {
    if(!video){
        return (
        <div> </div>
        )
    }
    const videoSrc=`http://www.youtube.com/embed/${video.id.videoId}`
  return (
    <>
    <div className='ui embed'>
        <iframe title='video player' src={videoSrc}></iframe>
    </div>
    <div className='ui segment'>
    <div>
     <h4 className='ui header'>{video.snippet.title}</h4> 
     <p>{video.snippet.description}</p>
    </div>
    </div>
    </>
  )
}
export default VideoDetail;