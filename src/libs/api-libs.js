export const getAnimeResponse = async (resource, query) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
    )
    if (!response.ok) {
      throw new Error("Respons jaringan tidak oke")
    }
    const anime = await response.json()
    return anime
  } catch (error) {
    console.error("Error mengambil data anime:", error)
    return null
  }
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource)
  if (response && response.data) {
    return response.data.flatMap((item) => item[objectProperty])
  } else {
    console.error("Error: Struktur respons tidak valid")
    return []
  }
}

export const reproduce = (data, gap) => {
  if (data && data.data && Array.isArray(data.data)) {
    const anime = data.data
    const first = Math.floor(Math.random() * (anime.length - gap))
    const last = first + gap

    const response = {
      data: anime.slice(first, last),
    }
    // console.log(response)
    return response
  } else {
    console.error("Error: Struktur data tidak valid di fungsi reproduce")
    return { data: [] }
  }
}
