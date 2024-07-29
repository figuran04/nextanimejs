"use client"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import HeaderMenu from "@/components/Utilities/HeaderCenter"
import ReviewCard from "@/components/ReviewCard"

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchReviews = async () => {
    const reviewAnime = await getAnimeResponse("reviews/anime", "page=1")
    setReviews(reviewAnime)
    setLoading(false)
  }
  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
        <HeaderMenu title={`Review`} />
        {reviews.data?.map((review, index) => (
          <div key={index} className="p-2 rounded-md shadow mb-4">
            {loading ? (
              <div className="w-full flex flex-col items-center">
                <section className="lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12">
                  <span>Memuat...</span>
                </section>
              </div>
            ) : (
              <ReviewCard review={review} />
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default ReviewsPage
