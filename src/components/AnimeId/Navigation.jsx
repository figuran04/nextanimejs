import Nav from "./Nav"

const Navigation = ({ nav }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 dark:text-color-primary text-color-dark mb-4">
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
