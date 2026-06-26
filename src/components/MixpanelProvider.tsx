'use client'

import mixpanel from 'mixpanel-browser'

let initialized = false

function initMixpanel() {
  if (initialized || typeof window === 'undefined') return
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  if (!token) return
  mixpanel.init(token, {
    debug: process.env.NODE_ENV === 'development',
    track_pageview: false,
  })
  initialized = true
}

export function MixpanelProvider({ children }: { children: React.ReactNode }) {
  initMixpanel()
  return <>{children}</>
}
