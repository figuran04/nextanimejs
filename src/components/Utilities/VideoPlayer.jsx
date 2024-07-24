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
      <div className="fixed z-50 bottom-2 right-2">
        <button
          className="float-right px-4 py-2 mb-1 transition-all Button rounded-lg"
          onClick={handleVideoPlayer}
        >
          ✖
        </button>
        {!youtubeId ? (
          <>
            <p>Memuat...</p>
            {youtubeId == [] ? (
              <p>Tidak ditemukan</p>
            ) : (
              <YouTube
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
              />
            )}
          </>
        ) : (
          <YouTube
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
          />
        )}
      </div>
    )
  }

  const ButtonOpenPlayer = () => {
    return (
      <button
        className="fixed z-50 px-4 py-2 font-bold rounded-lg bottom-1 right-1 Button"
        onClick={handleVideoPlayer}
      >
        Tonton Trailer
      </button>
    )
  }

  return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer
