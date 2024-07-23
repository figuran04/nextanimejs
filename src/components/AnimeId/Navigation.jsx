import Nav from "./Nav"

const Navigation = ({ nav }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mb-4 sm:flex sm:flex-wrap">
      {nav.map((item, index) => {
        return (
          <div key={index}>
            <Nav
              condition={item.condition}
              link={item.link}
              title={item.title}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Navigation
