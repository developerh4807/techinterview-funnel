'use client'

import mixpanel from 'mixpanel-browser'

let initialized = false

function initMixpanel(funnelId: string) {
  if (initialized || typeof window === 'undefined') return
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  if (!token) return
  mixpanel.init(token, {
    debug: process.env.NODE_ENV === 'development',
    track_pageview: false,
  })
  // funnel_id is registered as a super property so every event carries it.
  // In Mixpanel Funnels report: "Breakdown by: funnel_id" to compare funnels side-by-side.
  mixpanel.register({ funnel_id: funnelId })
  initialized = true
}

export function MixpanelProvider({
  children,
  funnelId,
}: {
  children: React.ReactNode
  funnelId: string
}) {
  initMixpanel(funnelId)
  return <>{children}</>
}
