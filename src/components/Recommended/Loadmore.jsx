"use client"
import { useInView } from "react-intersection-observer"
import Recommended from "."
const LoadMore = ({ topAnime }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return (
    <div ref={ref}>
      {inView ? (
        <Recommended api={topAnime} />
      ) : (
        <p className="text-lg font-medium text-color-primary">Memuat...</p>
      )}
    </div>
  )
}
export default LoadMore
