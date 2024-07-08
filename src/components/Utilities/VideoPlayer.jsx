"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const option = {
    width: "350",
    height: "250",
  }

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right bg-color-dark px-4 py-2 mb-1 hover:bg-color-accent hover:text-color-dark transition-all"
          onClick={handleVideoPlayer}
        >
          ✖
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    )
  }

  const ButtonOpenPlayer = () => {
    return (
      <button
        className="fixed bottom-1 right-1 bg-color-primary text-color-dark px-4 py-2 font-bold rounded hover:bg-color-accent hover:text-color-primary"
        onClick={handleVideoPlayer}
      >
        Tonton Trailer
      </button>
    )
  }

  return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer
