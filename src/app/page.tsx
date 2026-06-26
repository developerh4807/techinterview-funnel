import { PageTracker } from '@/components/PageTracker'
import { PdfMockup } from '@/components/PdfMockup'
import { SenderForm } from '@/components/SenderForm'

const TESTIMONIALS = [
  {
    name: '이○○ · 백엔드 개발자',
    text: '꼬리질문이 왜 나오는지, 어떻게 대응해야 하는지 처음으로 이해했어요. 덕분에 최종 합격했습니다.',
    company: '중견기업 최종 합격',
  },
  {
    name: '박○○ · 주니어 개발자',
    text: '자료집 보고 내가 왜 3번이나 탈락했는지 바로 알았습니다. 답변 구조부터 다시 잡았어요.',
    company: '스타트업 최종 합격',
  },
  {
    name: '김○○ · 경력 2년',
    text: '면접관 시각으로 정리된 기출 분석이 핵심이에요. 준비 방향이 완전히 달라졌습니다.',
    company: 'IT 기업 최종 합격',
  },
]

const FAQS = [
  {
    q: '정말 무료인가요?',
    a: '네, 완전 무료입니다. 이름과 이메일만 입력하시면 바로 전송해드립니다. 숨겨진 비용 없습니다.',
  },
  {
    q: '어떤 내용이 담겨있나요?',
    a: '실전 기술면접 기출문제, 면접관이 실제로 보는 채점 기준, 꼬리질문 대응 전략, 탈락 원인 TOP 5를 담았습니다.',
  },
  {
    q: 'PDF를 언제 받을 수 있나요?',
    a: '등록 직후 이메일로 즉시 발송됩니다. 스팸함도 한번 확인해보세요.',
  },
  {
    q: '어떤 분께 도움이 될까요?',
    a: '기술 실력은 있는데 면접에서 자꾸 떨어지는 개발자, 면접 준비를 처음 시작하는 분, 꼬리질문에 막히는 경험이 있으신 분께 특히 도움이 됩니다.',
  },
]

export default function SqueezePage() {
  return (
    <>
      <PageTracker event="page_view" properties={{ page: 'squeeze' }} />

      <main className="flex flex-col">
        {/* ── HERO ── */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-16 text-white">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 inline-block rounded-full bg-amber-400 px-4 py-1 text-sm font-semibold text-slate-900">
              개발자 취업 전문 멘토의 방법론을 그대로!
            </p>
            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              기술면접에서 계속 떨어지는 건
              <br />
              아는 게 부족해서가 아닙니다
            </h1>
            <p className="mb-10 text-lg text-slate-300">
              꼬리질문 한 마디에 막히고, 아는 내용도 두서없이 말하고,
              <br />
              면접관이 실제로 뭘 보는지 모르기 때문입니다.
              <br />
              합격자들이 쓰는 3-WAY 시스템과 기술검토 방법, 지금 무료로 받아가세요.
            </p>

            <PdfMockup />

            <div className="mx-auto max-w-md">
              <SenderForm ctaText="3-WAY 시스템 무료로 받기 →" />
            </div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="bg-white px-4 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-10 text-center text-2xl font-bold text-slate-900">
              아는데도 떨어지는 데에는 이유가 있습니다
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: '❓',
                  title: '꼬리질문이 시작되면 무너진다',
                  desc: '"HashMap이 뭔가요?"는 답했습니다. "그럼 HashCode 충돌 처리는요?" — 이 한 마디에 막힙니다. 면접관은 바로 그 순간 결정합니다.',
                },
                {
                  icon: '📋',
                  title: '아는 내용도 면접장에서 정리가 안 된다',
                  desc: '공부할 때는 분명히 이해했는데, 말로 하면 두서가 없습니다. 면접관 귀에는 "이 사람 모른다"로 들립니다.',
                },
                {
                  icon: '🎯',
                  title: '면접관이 뭘 보려고 이 질문을 하는지 모른다',
                  desc: 'OS 스케줄링을 줄줄 외웠는데 떨어졌습니다. 면접관은 암기를 본 게 아니었습니다. 질문 의도를 모르면 맞는 답도 틀린 답이 됩니다.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-6"
                >
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 font-bold text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT'S INSIDE ── */}
        <section className="bg-slate-50 px-4 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
              이 자료집을 읽고 나면
            </h2>
            <ul className="space-y-4">
              {[
                '꼬리질문이 오히려 기회가 됩니다 — 3-WAY 시스템으로 어떤 꼬리질문에도 3가지 응답 경로 중 하나를 선택할 수 있습니다. 실제 대화 예시로 흐름을 통째로 수록했습니다.',
                '면접관의 채점 기준이 보입니다 — 실제 기술검토 예시로 "이 질문, 무엇을 보려는 건지"가 처음으로 이해됩니다.',
                '내가 왜 떨어졌는지 정확히 알게 됩니다 — 탈락 원인 패턴 분석으로 자신의 면접에서 어디서 점수를 잃었는지 보입니다.',
                '합격 답변 구조를 그대로 쓸 수 있습니다 — 자료구조·OS·네트워크·DB·Spring 영역별로 면접관이 원하는 답변 포맷을 정리했습니다.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 text-green-500">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section className="bg-white px-4 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-10 text-center text-2xl font-bold text-slate-900">
              수강생 후기
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="rounded-xl border border-slate-200 p-5">
                  <p className="mb-4 text-sm leading-relaxed text-slate-700">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs font-medium text-amber-600">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-slate-50 px-4 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
              자주 묻는 질문
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="rounded-xl bg-white p-6 shadow-sm">
                  <p className="mb-2 font-semibold text-slate-900">Q. {faq.q}</p>
                  <p className="text-sm text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="bg-slate-900 px-4 py-16 text-white">
          <div className="mx-auto max-w-md text-center">
            <h2 className="mb-4 text-2xl font-bold">3-WAY 시스템, 지금 무료로 가져가세요</h2>
            <p className="mb-8 text-slate-300">이 자료집 하나가 면접 준비의 방향을 바꿉니다. 먼저 읽고 시작하세요.</p>
            <SenderForm ctaText="3-WAY 시스템 무료로 받기 →" />
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-slate-950 px-4 py-6 text-center text-xs text-slate-500">
          <p>© 2026 개발자H. 구독 취소는 이메일 하단 링크를 클릭하세요.</p>
        </footer>
      </main>
    </>
  )
}
