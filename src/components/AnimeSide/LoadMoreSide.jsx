"use client"
import { useInView } from "react-intersection-observer"
import AnimeSide from "."
const LoadMoreSide = ({ api }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return (
    <div ref={ref}>
      {inView ? (
        <AnimeSide api={api} />
      ) : (
        <p className="text-lg font-medium text-color-primary">Memuat...</p>
      )}
    </div>
  )
}
export default LoadMoreSide
