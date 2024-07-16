"use client"
import { useInView } from "react-intersection-observer"
import RecommendedCard from "../RecommendedCard"
import SkeletonAnimeRecommend from "../Utilities/SkeletonAnimeRecommend"
import { MotionDiv, transition, variants } from "../Utilities/MotionDiv"

const LoadMore = ({ api }) => {
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
                  transition={transition}
                  viewport={{ amount: 0 }}
                  key={index}
                  className="rounded-md shadow p-2"
                >
                  <RecommendedCard item={item} />
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
