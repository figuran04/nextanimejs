export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  )

  const anime = await response.json()

  return anime
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource)

  return response.data.flatMap((item) => item[objectProperty])
}

export const reproduce = (data, gap) => {
  const anime = data.data
  const first = Math.floor(Math.random() * (anime.length - gap))
  const last = first + gap

  const response = {
    data: anime.slice(first, last),
  }

  return response
}
