import { MotionDiv } from "../MotionDiv"
import RecommendedCard from "./RecommendedCard"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Recommended = ({ api }) => {
  if (!api.data) {
    return <p className="font-medium text-lg text-color-primary">Memuat...</p>
  }
  return (
    <div className="dark:text-color-primary text-color-dark">
      <div className="flex flex-col gap-4">
        {api.data?.map((item, index) => (
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.25,
              ease: "easeInOut",
              duration: 0.5,
            }}
            viewport={{ amount: 0 }}
            key={index}
            className="rounded-md shadow p-2"
          >
            <RecommendedCard item={item} />
          </MotionDiv>
        ))}
      </div>
    </div>
  )
}

export default Recommended
