'use client'

import { useEffect } from 'react'
import { track, setOnce } from '@/lib/mixpanel'

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
    if (ref) setOnce('acquisition_path', ref)
    track(event, { ...properties, ...(ref ? { ref } : {}) })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
