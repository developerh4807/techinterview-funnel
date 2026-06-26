import { PageTracker } from '@/components/PageTracker'

const INFLEARN_URL = 'https://inf.run/bzFYf'

export default function ThankYouPage() {
  return (
    <>
      <PageTracker event="thank_you_view" properties={{ page: 'thank_you' }} />

      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 text-5xl">🎉</div>

          <h1 className="mb-4 text-3xl font-extrabold text-slate-900">
            합격하는 기술면접 대비 가이드를
            <br />이메일로 보내드렸어요!
          </h1>

          {/* Spam callout */}
          <div className="mb-10 rounded-xl border-2 border-amber-400 bg-amber-50 px-6 py-4 text-left">
            <p className="mb-1 font-bold text-amber-800">
              📬 이메일이 안 보이시나요?
            </p>
            <p className="text-sm text-amber-700">
              <strong>스팸함을 꼭 확인해주세요!</strong> 자동 분류로 스팸함에 들어가는 경우가 있습니다.
            </p>
            <p className="mt-1 text-sm text-amber-700">
              스팸함에 있다면 <strong>스팸 해제</strong>를 눌러주세요. 이후 이메일이 정상 수신됩니다.
            </p>
            <p className="mt-2 text-xs text-amber-600">
              발신자: 개발자H &lt;developerh4807@freefromjob.kr&gt;
            </p>
          </div>

          {/* Soft sell */}
          <div className="mb-8 rounded-2xl bg-slate-50 p-8 text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber-600">
              한 가지만 더 말씀드릴게요
            </p>
            <h2 className="mb-3 text-xl font-bold text-slate-900">
              시스템을 알았다고 합격하는 건 아닙니다
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              자료집에서 배운 3-WAY 시스템과 기술검토 방법론은 방향을 잡아줍니다.
              하지만 실제 면접 준비는 다릅니다. 예상치 못한 질문 흐름, 압박 면접,
              동시에 병행해야 하는 훈련들 —{' '}
              <strong className="underline">이걸 독학으로 소화하기는 쉽지 않습니다.</strong>
              <br /><br />
              그리고 더 중요한 게 있습니다. 내용을 많이 안다고 합격하는 게 아닙니다.{' '}
              <strong className="underline">합격에 직접 영향을 미치는 요소</strong>가 따로 있고,
              많은 지원자가 그걸 모른 채 면접장에 들어갑니다. 강의는 바로 그 지점에서 시작합니다.
            </p>
            <div className="text-center">
              <a
                href={INFLEARN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700"
              >
                면접관의 속마음 들여다보기 →
              </a>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            이메일이 오지 않으면{' '}
            <a
              href="mailto:developerh4807@freefromjob.kr"
              className="underline"
            >
              developerh4807@freefromjob.kr
            </a>
            으로 연락주세요.
          </p>
        </div>
      </main>
    </>
  )
}
