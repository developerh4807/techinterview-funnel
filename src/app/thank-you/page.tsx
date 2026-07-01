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
          <div className="mb-10 rounded-xl border-2 border-amber-400 bg-amber-50 px-6 py-5 text-left">
            <p className="mb-1 text-lg font-bold text-amber-900">
              📬 메일함에 안 보이시나요? 3분이면 해결됩니다
            </p>
            <p className="mb-4 text-sm text-amber-700">
              자동 필터 때문에 <strong>스팸함(또는 프로모션함)</strong>으로 들어가는 경우가 많습니다.
              아래 방법대로 <strong>딱 한 번만</strong> 처리해두시면, 이후 이메일(Day 1~5)까지 전부 받은편지함으로 정상 수신됩니다.
            </p>

            <ol className="mb-4 space-y-2 text-sm text-amber-800">
              <li>
                <strong>① 스팸함 확인:</strong> 메일함에서 &lsquo;스팸함&rsquo;(또는 Gmail은 &lsquo;프로모션함&rsquo;)을 열어 발신자{' '}
                <strong>개발자H (developerh4807@freefromjob.kr)</strong> 메일을 찾아주세요.
              </li>
              <li>
                <strong>② 스팸 해제:</strong> 메일을 열고 &lsquo;스팸 아님&rsquo; 또는 &lsquo;정상메일로 이동&rsquo; 버튼을 눌러주세요.
              </li>
              <li>
                <strong>③ 주소록에 추가:</strong> 발신자 주소(developerh4807@freefromjob.kr)를 연락처/주소록에 추가하면
                이후 메일도 스팸함으로 가지 않습니다.
              </li>
            </ol>

            <div className="grid gap-3 border-t border-amber-200 pt-4 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-600">Gmail</p>
                <p className="text-xs leading-relaxed text-amber-700">
                  프로모션 탭이나 스팸함에서 메일을 열고 상단의 <strong>&lsquo;스팸 아님&rsquo;</strong> 클릭.
                  프로모션 탭에 있다면 메일을 <strong>받은편지함 탭으로 드래그</strong>하면 다음부터 바로 받은편지함에 도착해요.
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-600">네이버 메일</p>
                <p className="text-xs leading-relaxed text-amber-700">
                  좌측 <strong>스팸메일함</strong> 진입 → 메일 선택 후 상단 <strong>&lsquo;정상메일으로 이동&rsquo;</strong> 클릭.
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-600">다음(카카오) 메일</p>
                <p className="text-xs leading-relaxed text-amber-700">
                  좌측 <strong>스팸편지함</strong> 진입 → 메일 선택 후 <strong>&lsquo;정상편지함으로 복사&rsquo;</strong> 클릭.
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-600">Outlook / Hotmail</p>
                <p className="text-xs leading-relaxed text-amber-700">
                  <strong>정크 메일</strong> 폴더에서 메일 선택 → <strong>&lsquo;정크 메일 아님&rsquo;</strong>으로 표시.
                </p>
              </div>
            </div>

            <p className="mt-4 border-t border-amber-200 pt-3 text-xs text-amber-600">
              그래도 안 보이면 발신자에게 <strong>답장(회신)을 한 번 보내주세요.</strong> 스팸 필터가 &lsquo;신뢰할 수 있는 발신자&rsquo;로 학습해
              이후 메일부터 정상 수신될 확률이 크게 올라갑니다.
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
