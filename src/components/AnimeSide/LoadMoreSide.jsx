"use client"
import { useInView } from "react-intersection-observer"
import AnimeSide from "."
import SkeletonAnimeSide from "../SkeletonAnimeSide"
const LoadMoreSide = ({ api }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return (
    <div ref={ref}>
      {inView ? <AnimeSide api={api} /> : <SkeletonAnimeSide />}
    </div>
  )
}
export default LoadMoreSide
