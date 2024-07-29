import HeaderAnime from "@/components/AnimeId/HeaderAnime"
import Navbar from "@/components/AnimeId/Navbar"
import Skor from "@/components/AnimeId/Skor"
import { getAnimeResponse } from "@/libs/api-libs"
import Link from "next/link"

const AnimeIdPage = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}/full`)

  const Section = ({ title, content }) => (
    <div className="flex flex-col gap-1">
      <HeaderAnime title={title} />
      {content}
    </div>
  )

  const Genre = ({ data }) => (
    <Section
      title="Genre"
      content={
        <div className="flex">
          {data.demographics?.map((item) => (
            <Link
              key={item.mal_id}
              href={`/genre/${item.name.toLowerCase()}/page/1`}
              className="Color mr-3"
            >
              {item.name}
            </Link>
          ))}
          {data.genres?.map((item) => (
            <Link
              key={item.mal_id}
              href={`/genre/${item.name.toLowerCase()}/page/1`}
              className="Color mr-3"
            >
              {item.name}
            </Link>
          ))}
        </div>
      }
    />
  )

  const Relations = ({ data }) => (
    <Section
      title="Relasi"
      content={
        <table>
          <tbody>
            {data.relations?.map((item, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap">{item.relation}</td>
                <td className="flex flex-col">
                  {item.entry?.map(({ mal_id, name, type }) => (
                    <div className="Color" key={mal_id}>
                      {type === "anime" ? (
                        <Link href={`/anime/${mal_id}`}>
                          {`${name} (${type})`}
                        </Link>
                      ) : (
                        <p>{`${name} (${type})`}</p>
                      )}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    />
  )

  const Theme = ({ data }) => (
    <Section
      title="Lagu Tema"
      content={
        <table>
          <tbody>
            {data.theme.openings?.length > 0 && (
              <tr>
                <td>Opening</td>
                <td className="flex flex-col">
                  {data.theme.openings.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </td>
              </tr>
            )}
            {data.theme.endings?.length > 0 && (
              <tr>
                <td>Ending</td>
                <td className="flex flex-col">
                  {data.theme.endings.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      }
    />
  )

  return (
    <div className="flex flex-col gap-2">
      <Navbar id={id} detail={true} />
      <Section title="Skor" content={<Skor data={data} />} />
      {data.demographics && <Genre data={data} />}
      {data.relations && <Relations data={data} />}
      {data.synopsis && (
        <Section
          title="Sinopsis"
          content={
            <p className="text-justify text-[14px] leading-[21px] md:text-base md:leading-6">
              {data.synopsis}
            </p>
          }
        />
      )}
      {data.background && (
        <Section
          title="Latar Belakang"
          content={
            <p className="text-justify text-[14px] leading-[21px] md:text-base md:leading-6">
              {data.background}
            </p>
          }
        />
      )}
      {!data.theme.openings && !data.theme.endings && <Theme data={data} />}
      {data.producers && (
        <Section
          title="Produser"
          content={
            <div className="text-[14px] leading-[21px] md:text-base md:leading-6">
              {data.producers
                .map((item) => <span key={item.mal_id}>{item.name}</span>)
                .reduce((prev, curr) => [prev, ", ", curr])}
            </div>
          }
        />
      )}
      {data.external && (
        <Section
          title="Eksternal"
          content={
            <div className="flex flex-wrap">
              {data.external.map((item, index) => (
                <Link
                  href={item.url}
                  target="_blank"
                  className="Color whitespace-nowrap mr-3"
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          }
        />
      )}
    </div>
  )
}

export default AnimeIdPage
