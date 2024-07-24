import SkeletonAnimeSide from "../Utilities/SkeletonAnimeSide"
import { MotionDiv, transition, variants } from "../Utilities/MotionDiv"
import AnimeSideCard from "../AnimeSideCard"

const AnimeSide = ({ api }) => {
  if (!api.data) {
    return <SkeletonAnimeSide />
  }

  return (
    <div className="flex flex-col gap-2">
      {api.data?.map((anime, index) => {
        return (
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={transition}
            viewport={{ amount: 0 }}
            className="relative overflow-hidden transition-all rounded hover:shadow shadow-sm cursor-pointer group Text"
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
