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
          className="dark:text-color-primary text-color-dark float-right dark:bg-color-dark bg-color-primary px-4 py-2 mb-1 hover:bg-color-accent hover:dark:text-color-dark hover:dark:bg-color-secondary hover:text-color-primary transition-all"
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
        className="fixed bottom-1 right-1 dark:bg-color-primary bg-color-dark dark:text-color-dark text-color-primary px-4 py-2 font-bold rounded dark:hover:bg-color-accent hover:bg-color-secondary dark:hover:text-color-primary hover:text-color-dark"
        onClick={handleVideoPlayer}
      >
        Tonton Trailer
      </button>
    )
  }

  return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer
