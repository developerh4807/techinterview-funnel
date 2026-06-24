import { PageTracker } from '@/components/PageTracker'
import { SenderForm } from '@/components/SenderForm'

/* Phase B — 웨비나 등록 페이지 (콜드 트래픽 전용)
 * 이 페이지는 SNS 웨비나 캠페인에서 진입하는 콜드 트래픽 대상입니다.
 * 기존 이메일 구독자는 /webinar/watch?ref=email_seq 로 직접 연결하세요. */

export default function WebinarPage() {
  return (
    <>
      <PageTracker event="webinar_register_view" properties={{ page: 'webinar' }} />

      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 py-16 text-white">
        <div className="mx-auto max-w-lg text-center">
          {/* TODO: Phase B 웨비나 영상 완성 후 실제 내용으로 교체 */}
          <p className="mb-4 inline-block rounded-full bg-amber-400 px-4 py-1 text-sm font-semibold text-slate-900">
            무료 웨비나
          </p>
          <h1 className="mb-6 text-3xl font-extrabold">
            기술면접 완전 정복
            <br />
            무료 웨비나 등록
          </h1>
          <p className="mb-10 text-slate-300">
            준비 중입니다. 등록하시면 오픈 시 가장 먼저 알려드립니다.
          </p>
          <SenderForm ctaText="웨비나 오픈 알림 받기 →" />
        </div>
      </main>
    </>
  )
}
