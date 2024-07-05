export const getAnimeResponse = async (resource, query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
    )
    const anime = await response.json()
    return anime
  } catch (error) {
    console.error("Error fetching anime response:", error)
    return { data: [] } // Nilai fallback
  }
}

export const getNestedAnimeResponse = async (resource) => {
  try {
    const response = await getAnimeResponse(resource)
    if (response.data && Array.isArray(response.data)) {
      return response.data.flatMap((item) => item.entry || [])
    } else {
      console.error(
        "Response data is not an array or is undefined:",
        response.data
      )
      return [] // Nilai fallback
    }
  } catch (error) {
    console.error("Error fetching nested anime response:", error)
    return [] // Nilai fallback
  }
}

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1)
  const last = first + gap

  const response = {
    data: data.slice(first, last),
  }
  return response
}
