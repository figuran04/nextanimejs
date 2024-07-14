"use client"
import { useInView } from "react-intersection-observer"
import RecommendedCard from "./RecommendedCard"
import SkeletonAnimeRecommend from "../SkeletonAnimeRecommend"
import { MotionDiv } from "../MotionDiv"
import Link from "next/link"
import Image from "next/image"
import FormattedDate from "../FormattedDate"
import { useState } from "react"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const LoadMore = ({ api }) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleFullText = () => {
    setShowFullText(!showFullText)
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  if (!api || !api.data) {
    return <SkeletonAnimeRecommend />
  }
  return (
    <div ref={ref}>
      {inView ? (
        <div className="dark:text-color-primary text-color-dark">
          <div className="flex flex-col gap-4">
            {api.data
              ?.filter((item, index) => index < 3)
              .map((item, index) => (
                <MotionDiv
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: index * 0.25,
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                  viewport={{ amount: 0 }}
                  key={index}
                  className="rounded-md shadow p-2"
                >
                  <div className="flex justify-between gap-2">
                    {item.entry?.map((entry, index) => (
                      <Link
                        key={entry.mal_id}
                        href={`/anime/${entry.mal_id}`}
                        className="w-1/2 flex gap-2 group hover:scale-105 transition-all relative rounded overflow-hidden cursor-pointer dark:text-color-primary text-color-dark hover:shadow dark:hover:bg-color-dark hover:bg-color-primary"
                      >
                        {entry.score ? (
                          <div className="absolute top-0 left-0 dark:bg-color-accent bg-color-secondary rounded-s font-bold px-2 py-1 mt-2 flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="size-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p>{entry.score}</p>
                          </div>
                        ) : null}
                        <Image
                          src={entry.images.webp.small_image_url}
                          alt={entry.images.jpg.small_image_url}
                          width={100}
                          height={100}
                          className="lg:h-full h-full lg:w-16 w-14 object-cover transition-all rounded"
                        />
                        <div className="text-sm">
                          {index == 0 ? (
                            <p>Jika suka</p>
                          ) : (
                            <p className="line-clamp-1">maka mungkin suka</p>
                          )}
                          <p className="text-base md:text-xl sm:text-lg font-bold line-clamp-2">
                            {entry.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2">
                    <p
                      className={`text-justify text-lg lg:text-xl ${
                        showFullText ? "" : "line-clamp-5"
                      }`}
                    >
                      {item.content}
                    </p>
                    <div className="flex justify-between items-center">
                      <FormattedDate
                        dateString={item.date}
                        styles="font-bold opacity-50"
                      />
                      <button
                        className="hover:underline opacity-50 mx-2 my-1"
                        onClick={toggleFullText}
                      >
                        {showFullText ? "Kembali semula" : "Baca selengkapnya"}
                      </button>
                    </div>
                  </div>
                </MotionDiv>
              ))}
          </div>
        </div>
      ) : (
        <SkeletonAnimeRecommend />
      )}
    </div>
  )
}
export default LoadMore
