import { PageTracker } from '@/components/PageTracker'

/* TODO: 인프런 VOD 실제 URL로 교체 */
const INFLEARN_URL = 'https://www.inflearn.com'

export default function ThankYouPage() {
  return (
    <>
      <PageTracker event="thank_you_view" properties={{ page: 'thank_you' }} />

      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 text-5xl">🎉</div>

          <h1 className="mb-4 text-3xl font-extrabold text-slate-900">
            자료집을 이메일로 보내드렸어요!
          </h1>
          <p className="mb-2 text-slate-600">
            받은편지함을 확인해보세요. 스팸함에 들어갔을 수도 있습니다.
          </p>
          <p className="mb-12 text-sm text-slate-400">
            발신: 개발자H (developerh4807@gmail.com)
          </p>

          {/* Soft sell */}
          <div className="mb-8 rounded-2xl bg-slate-50 p-8 text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-600">
              한 가지만 더 말씀드릴게요
            </p>
            <h2 className="mb-3 text-xl font-bold text-slate-900">
              자료집 이후, 실전 연습이 필요하다면
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              기출문제를 아는 것과 실제 답변을 구성하는 건 다릅니다.
              꼬리질문 대응, 면접관 시각, 합격 답변 구조를 영상으로 정리한
              기술면접 VOD도 있습니다.
            </p>
            <a
              href={INFLEARN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={undefined}
              className="inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              기술면접 VOD 살펴보기 →
            </a>
          </div>

          <p className="text-xs text-slate-400">
            이메일이 오지 않으면{' '}
            <a
              href="mailto:developerh4807@gmail.com"
              className="underline"
            >
              developerh4807@gmail.com
            </a>
            으로 연락주세요.
          </p>
        </div>
      </main>
    </>
  )
}
