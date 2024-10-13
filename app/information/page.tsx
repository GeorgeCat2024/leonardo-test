import createApolloClient from '@/lib/Apollo/ssr/client'
import { getAnimeList } from '@/query/getAnimeList'
import { Pagination } from '@/components/information-page/Information.Pagination'
import { AnimeCardsGrid } from '@/components/information-page/Information.AnimeCardsGrid'

export default async function InformationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | number }
}) {
  const apolloClient = createApolloClient('https://graphql.anilist.co')

  const {
    data: {
      Page: { pageInfo, media: animes },
    },
  } = await apolloClient.query({
    query: getAnimeList,
    variables: {
      page: searchParams?.page ?? 1,
      sort: ['TRENDING_DESC', 'POPULARITY_DESC'],
      type: 'ANIME',
    },
  })

  return (
    <>
      <AnimeCardsGrid animes={animes} />
      <Pagination pageLink="/information" pageInfo={pageInfo} />
    </>
  )
}
