export const getBeritaResponse = async (resource, category) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}/${category}`
  )
  const data = await response.json()
  return data
}
