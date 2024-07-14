"use client"
import { useInView } from "react-intersection-observer"
import AnimeList from "."
import SkeletonAnimeList from "../SkeletonAnimeList"
const LoadMore = ({ api }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return (
    <div ref={ref}>
      {inView ? <AnimeList api={api} /> : <SkeletonAnimeList />}
    </div>
  )
}
export default LoadMore
