const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-4">
        <h3 className="text-center text-2xl dark:text-color-primary text-color-dark font-bold uppercase">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default HeaderMenu
