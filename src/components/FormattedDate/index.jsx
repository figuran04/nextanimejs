// components/FormattedDate.js
import { format, formatDistanceToNow } from "date-fns"
import { id } from "date-fns/locale"

const FormattedDate = ({ dateString, style }) => {
  const date = new Date(dateString)
  const now = new Date()

  let formattedDate
  const distanceToNow = formatDistanceToNow(date, {
    addSuffix: true,
    locale: id,
  })

  if (distanceToNow.includes("kurang dari sehari")) {
    formattedDate = "Hari ini"
  } else if (distanceToNow.includes("1 hari")) {
    formattedDate = "Kemarin"
  } else {
    formattedDate = format(date, "dd MMMM yyyy", { locale: id })
  }

  return <p className={style}>{formattedDate}</p>
}

export default FormattedDate
