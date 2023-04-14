import { Dispatch, SetStateAction } from 'react'

export interface CompanyProps {
  ceo: string
  coo: string
  founded: number
  headquarters: {
    city: string
    state: string
  }
  summary: string
}

export interface LayoutProps {
  title: string
  children: React.ReactNode
  className?: string
}

export interface NewsProps {
  id: string
  details: string
  event_date_utc: string
  flight: {
    details: string
    mission_name: string
  }
  links: {
    article: string
  }
  title: string
}

export interface CardProps {
  href: string
  title: string
  details: string
  date?: string
  extraDetails?: string
  role?: string
}

export interface PagerProps {
  currentPageNumber: number
  pageSize: number
  path: string
  pathNumberPage: number
  totalCount: number
}

export interface PageElementProps {
  className?: string
  children: React.ReactNode
  path?: string
  testId?: string
}

export interface MenuItemProps {
  name: string
  href: string
}

export interface LaunchProps {
  mission_name: string
  details: string
  id: string
  launch_date_local: string
  links: {
    article_link: string
  }
  rocket: {
    rocket: {
      name: string
    }
  }
}

export interface Search {
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
}
