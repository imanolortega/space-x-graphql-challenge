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