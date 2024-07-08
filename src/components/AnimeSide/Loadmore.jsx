"use client"
import { useInView } from "react-intersection-observer"
import AnimeSide from "."
const MyComponent = ({ topAnime }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return (
    <div ref={ref}>
      {inView ? (
        <AnimeSide api={topAnime} />
      ) : (
        <p className="text-lg font-medium text-color-primary">Memuat...</p>
      )}
    </div>
  )
}
export default MyComponent
