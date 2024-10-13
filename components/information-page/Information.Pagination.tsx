import Link from 'next/link'

import { PageInfo } from '@/types/anime'

type PaginationProps = {
  pageLink: string
  pageInfo: PageInfo
}

export function Pagination({ pageLink, pageInfo }: PaginationProps) {
  /**
   * The total and lastPage fields are not currently accurate. You should only rely on hasNextPage for any pagination logic.
   * reference: https://docs.anilist.co/guide/graphql/pagination#pageinfo
   */

  const { currentPage, hasNextPage } = pageInfo

  return (
    <div className="m-auto p-8 pt-4 flex items-center gap-6 justify-center">
      {currentPage > 1 && (
        <Link
          href={`${pageLink}?page=${currentPage - 1}`}
          className="hover:underline"
        >
          &lt; &lt;
        </Link>
      )}
      <p className="font-medium">Current Page: {currentPage}</p>
      {hasNextPage && (
        <Link
          href={`${pageLink}?page=${currentPage + 1}`}
          className="hover:underline"
        >
          &gt; &gt;
        </Link>
      )}
    </div>
  )
}
