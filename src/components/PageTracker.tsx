'use client'

import { useEffect } from 'react'
import { track, setOnce, register } from '@/lib/mixpanel'

export function PageTracker({
  event,
  properties,
}: {
  event: string
  properties?: Record<string, unknown>
}) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    const utmSource = params.get('utm_source')

    if (ref) setOnce('acquisition_path', ref)

    if (utmSource) {
      // Persist on the user profile (first-touch) and register as a super
      // property so every event in this session carries utm_source too —
      // lets us break down any funnel step by traffic source in Mixpanel.
      setOnce('utm_source', utmSource)
      register({ utm_source: utmSource })
      track('utm_entry', { ...properties, utm_source: utmSource })
    }

    track(event, {
      ...properties,
      ...(ref ? { ref } : {}),
      ...(utmSource ? { utm_source: utmSource } : {}),
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
