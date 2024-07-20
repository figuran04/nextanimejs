import SkeletonAnimeSide from "../Utilities/SkeletonAnimeSide"
import { MotionDiv, transition, variants } from "../Utilities/MotionDiv"
import AnimeSideCard from "../AnimeSideCard"

const AnimeSide = ({ api }) => {
  if (!api.data) {
    return <SkeletonAnimeSide />
  }

  return (
    <div className="flex flex-col gap-4">
      {api.data?.map((anime, index) => {
        return (
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={transition}
            viewport={{ amount: 0 }}
            className="group cursor-pointer dark:text-color-primary text-color-dark transition-all relative rounded overflow-hidden hover:scale-105 shadow hover:shadow-md"
            key={index}
          >
            <AnimeSideCard anime={anime} />
          </MotionDiv>
        )
      })}
    </div>
  )
}

export default AnimeSide
