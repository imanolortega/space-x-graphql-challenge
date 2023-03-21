import { PagerElement } from './pager-element'
import { paginationRange } from '@/utils/pager'
import { PagerProps } from '@/utils/interfaces'

export default function Pager({
  currentPageNumber,
  pageSize,
  path,
  pathNumberPage,
  totalCount,
}: PagerProps) {
  const previewPage = pathNumberPage - 1
  const previewPath =
    previewPage > 0 ? `${path}?page=${previewPage}` : `${path}`
  const nextPage = pathNumberPage + 1
  const nextPath = `${path}?page=${nextPage}`

  const paginationElements = paginationRange({
    currentPage: currentPageNumber,
    pageSize: pageSize,
    siblingCount: 1,
    totalCount: totalCount,
  })

  const lastElement =
    paginationElements && paginationElements[paginationElements?.length - 1]

  return (
    <div className="flex">
      {previewPage > -1 && (
        <PagerElement
          iconClassName="
            inline-flex justify-center items-center
            w-20 aspect-w-1 aspect-h-1
            bg-slate-300 color-slate-900
            "
          path={previewPath}
        />
      )}
      {paginationElements?.map((element) => (
        <PagerElement
          key={element}
          currentPageNumber={currentPageNumber}
          number={element}
          path={element === 1 ? `${path}` : `${path}?page=${element - 1}`}
        />
      ))}
      {currentPageNumber < lastElement && (
        <PagerElement
          iconClassName="
          inline-flex justify-center items-center
          w-20 aspect-w-1 aspect-h-1
          bg-slate-300 color-slate-900
          "
          path={nextPath}
        />
      )}
    </div>
  )
}
