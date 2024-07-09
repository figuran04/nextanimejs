"use client"
import { useEffect, useState } from "react"
import ReviewCard from "./components/ReviewCard"
import { getAnimeResponse } from "@/libs/api-libs"
import HeaderMenu from "@/components/Utilities/HeaderMenu"

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getAnimeResponse("reviews/anime", "page=1")
      setReviews(data.data)
      setLoading(false)
    }

    fetchReviews()
  }, [])

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center">
        <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
          <p className="font-medium text-lg text-color-primary">Memuat...</p>
        </section>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`Review`} />
        {reviews?.map((review) => (
          <ReviewCard key={review.mal_id} review={review} />
        ))}
      </section>
    </div>
  )
}

export default ReviewsPage
