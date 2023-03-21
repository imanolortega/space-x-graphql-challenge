import { PagerElement } from './pager-element'
import { paginationRange } from '@/utils/pager'
import { PagerProps } from '@/utils/interfaces'
import ArrowLeft from '@/icons/arrow-left'
import ArrowRight from '@/icons/arrow-right'

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
        <PagerElement path={previewPath}>
          <ArrowLeft />
        </PagerElement>
      )}
      {paginationElements?.map((element) => (
        <PagerElement
          currentPageNumber={currentPageNumber}
          key={element}
          number={element}
          path={element === 1 ? `${path}` : `${path}?page=${element - 1}`}
        >
          {element}
        </PagerElement>
      ))}
      {currentPageNumber < lastElement && (
        <PagerElement path={nextPath}>
          <ArrowRight />
        </PagerElement>
      )}
    </div>
  )
}
