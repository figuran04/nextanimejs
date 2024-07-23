const SkeletonAnimeSide = () => {
  return (
    <div className="flex flex-col gap-4 opacity-30">
      <div className="flex flex-row rounded">
        <div className="w-24 h-24 rounded lg:h-28 lg:w-28 skeleton" />
        <div className="flex flex-col w-full gap-2 px-4 my-1">
          <div className="w-3/4 h-5 rounded-full skeleton" />
          <div className="flex flex-wrap w-2/3 h-5 rounded-full skeleton" />
        </div>
      </div>
      <div className="flex flex-row rounded">
        <div className="w-24 h-24 rounded lg:h-28 lg:w-28 skeleton" />
        <div className="flex flex-col w-full gap-2 px-4 my-1">
          <div className="w-3/4 h-5 rounded-full skeleton" />
          <div className="flex flex-wrap w-2/3 h-5 rounded-full skeleton" />
        </div>
      </div>
      <div className="flex flex-row rounded">
        <div className="w-24 h-24 rounded lg:h-28 lg:w-28 skeleton" />
        <div className="flex flex-col w-full gap-2 px-4 my-1">
          <div className="w-3/4 h-5 rounded-full skeleton" />
          <div className="flex flex-wrap w-2/3 h-5 rounded-full skeleton" />
        </div>
      </div>
      <div className="flex flex-row rounded">
        <div className="w-24 h-24 rounded lg:h-28 lg:w-28 skeleton" />
        <div className="flex flex-col w-full gap-2 px-4 my-1">
          <div className="w-3/4 h-5 rounded-full skeleton" />
          <div className="flex flex-wrap w-2/3 h-5 rounded-full skeleton" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonAnimeSide
