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
            className="relative overflow-hidden transition-all rounded shadow cursor-pointer group dark:text-color-primary text-color-dark hover:shadow-md"
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
