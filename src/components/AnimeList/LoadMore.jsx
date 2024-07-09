"use client"
import { useInView } from "react-intersection-observer"
import AnimeList from "."
const LoadMore = ({ api }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return (
    <div ref={ref}>
      {inView ? (
        <AnimeList api={api} />
      ) : (
        <p className="text-lg font-medium text-color-primary">Memuat...</p>
      )}
    </div>
  )
}
export default LoadMore
