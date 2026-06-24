'use client'

import { useEffect, useRef } from 'react'
import { track } from '@/lib/mixpanel'

export function SenderForm({ ctaText = '무료 자료집 받기 →' }: { ctaText?: string }) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const emailInput = formRef.current?.querySelector('input[type="email"]')
    if (!emailInput) return
    const handler = () => track('form_focus')
    emailInput.addEventListener('focus', handler, { once: true })
    return () => emailInput.removeEventListener('focus', handler)
  }, [])

  /* ──────────────────────────────────────────────
   * TODO: Sender 폼 연동
   *
   * 옵션 A — JS embed (권장)
   *   1. Sender 대시보드 → Forms → 폼 생성 → 임베드 코드 복사
   *   2. 아래 placeholder div를 Sender 제공 코드로 교체
   *   3. next.config.ts에 Sender 도메인 CSP 허용 추가
   *
   * 옵션 B — API 연동
   *   1. SENDER_API_KEY를 .env.local에 추가
   *   2. src/app/api/subscribe/route.ts 생성 후 Sender API 호출
   *   3. 이 컴포넌트에서 fetch('/api/subscribe', ...) 호출
   * ────────────────────────────────────────────── */
  return (
    <div ref={formRef} className="w-full">
      {/* Placeholder form — Sender 연동 전 개발용 */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          track('form_submit')
          window.location.href = '/thank-you'
        }}
        className="flex flex-col gap-3"
      >
        <input
          type="text"
          placeholder="이름 (예: 김개발)"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <input
          type="email"
          placeholder="이메일 주소"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-amber-400 px-6 py-4 text-lg font-bold text-gray-900 transition hover:bg-amber-500 active:scale-95"
        >
          {ctaText}
        </button>
        <p className="text-center text-xs text-gray-400">
          스팸 없음. 언제든지 구독 취소 가능.
        </p>
      </form>
    </div>
  )
}
