'use client'

import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

export function MixpanelProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
    if (!token) return
    mixpanel.init(token, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: false,
    })
  }, [])

  return <>{children}</>
}
