import mixpanel from 'mixpanel-browser'

export function track(event: string, props?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  try {
    mixpanel.track(event, props)
  } catch {
    // not initialized yet
  }
}

export function setOnce(key: string, value: string) {
  if (typeof window === 'undefined') return
  try {
    mixpanel.people.set_once(key, value)
  } catch {
    // not initialized yet
  }
}
