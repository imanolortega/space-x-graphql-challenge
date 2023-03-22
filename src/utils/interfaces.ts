export interface CompanyProps {
  ceo: string
  coo: string
  cto: string
  employees: number
  founded: number
  founder: string
  headquarters: {
    city: string
    state: string
  }
  launch_sites: number
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
  event_date_unix: number
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
  date: string
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
}

export interface MenuItemProps {
  name: string
  href: string
}