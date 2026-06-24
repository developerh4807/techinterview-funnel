'use client'

import { useEffect } from 'react'
import { PageTracker } from '@/components/PageTracker'
import { track } from '@/lib/mixpanel'

/* Phase B — 웨비나 시청 페이지
 * 기존 이메일 구독자가 Day 5 이메일 링크(/webinar/watch?ref=email_seq)로 진입하는 페이지.
 * 콜드 트래픽은 /webinar 등록 폼을 통해 이 페이지로 유입됩니다. */

/* TODO: 실제 웨비나 영상 URL (YouTube / Vimeo embed) 로 교체 */
const VIDEO_EMBED_URL = ''

/* TODO: 인프런 VOD 실제 URL로 교체 */
const INFLEARN_URL = 'https://www.inflearn.com'

function VideoPlayer() {
  useEffect(() => {
    // 영상 재생 시작 이벤트는 실제 플레이어 콜백에서 track('video_play') 호출
  }, [])

  if (!VIDEO_EMBED_URL) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-slate-800 text-slate-400">
        <p className="text-sm">웨비나 영상 준비 중입니다</p>
      </div>
    )
  }

  return (
    <iframe
      src={VIDEO_EMBED_URL}
      className="aspect-video w-full rounded-xl"
      allow="autoplay; fullscreen"
      allowFullScreen
      onPlay={() => track('video_play', { page: 'webinar_watch' })}
    />
  )
}

export default function WebinarWatchPage() {
  return (
    <>
      <PageTracker event="webinar_watch_view" properties={{ page: 'webinar_watch' }} />

      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-2xl font-extrabold text-slate-900">
          기술면접 완전 정복 웨비나
        </h1>

        <VideoPlayer />

        <div className="mt-10 rounded-xl bg-slate-50 p-6">
          <p className="mb-2 text-sm font-semibold text-amber-600 uppercase tracking-wide">
            웨비나를 보셨다면
          </p>
          <h2 className="mb-3 text-xl font-bold text-slate-900">
            실전 연습은 VOD로 이어가세요
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">
            영상에서 다룬 답변 구조와 꼬리질문 대응을 더 깊이 파고싶다면
            기술면접 VOD를 확인해보세요.
          </p>
          <a
            href={INFLEARN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('inflearn_click', { page: 'webinar_watch', acquisition_path: 'webinar' })}
            className="inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            기술면접 VOD 살펴보기 →
          </a>
        </div>
      </main>
    </>
  )
}
