// components/FormattedDate.js
import { format, formatDistanceToNow } from "date-fns"
import { id } from "date-fns/locale"

const FormattedDate = ({ dateString, styles }) => {
  const date = new Date(dateString)

  let formattedDate
  const distanceToNow = formatDistanceToNow(date, {
    addSuffix: true,
    locale: id,
  })

  if (distanceToNow.includes("less than a day")) {
    formattedDate = "Hari ini"
  } else if (distanceToNow.includes("1 day")) {
    formattedDate = "Kemarin"
  } else {
    formattedDate = format(date, "dd MMM yyyy", { locale: id })
  }

  return (
    <div className="flex">
      <p className={`text-color-grey whitespace-nowrap ${styles}`}>
        {formattedDate}
      </p>
    </div>
  )
}

export default FormattedDate
