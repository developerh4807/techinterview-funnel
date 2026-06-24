# techinterview-funnel

기술면접 VOD Sender 이메일 퍼널 웹앱. PDF 기출문제 자료집 → 이메일 캡처 → Sender 시퀀스 → 인프런 VOD 구매.

## 퍼널 구조

```
SNS → / (PDF 스퀴즈 페이지) → /thank-you → Sender 이메일 시퀀스 → 인프런 VOD
                                           └ Day 5 이메일: /webinar/watch?ref=email_seq

SNS 웨비나 캠페인 → /webinar (등록 폼) → /webinar/watch
```

## 페이지

| URL | 역할 |
|---|---|
| `/` | PDF 기출문제 자료집 스퀴즈 페이지 |
| `/thank-you` | 등록 완료 + 인프런 소프트 셀 |
| `/webinar` | 웨비나 등록 폼 (Phase B) |
| `/webinar/watch` | 웨비나 시청 (기존 리드 직접 접근) |

## 로컬 설정

```bash
# 의존성 설치
npm install

# secondbrain docs 심볼릭 링크 생성
bash scripts/setup-docs-link.sh

# 환경변수 설정
cp .env.local.example .env.local
# .env.local 파일에 실제 토큰 입력

# 개발 서버 실행
npm run dev
```

설계 문서는 `./docs/` (→ `~/secondbrain/20_Business/기술면접-vod/docs/`) 에 있습니다.

## 환경변수

`.env.local.example` 참조.

| 변수 | 설명 |
|---|---|
| `NEXT_PUBLIC_MIXPANEL_TOKEN` | Mixpanel 프로젝트 토큰 |
| `SENDER_API_KEY` | Sender API 키 (API 방식 연동 시) |

## Sender 연동

`src/components/SenderForm.tsx`에 TODO 마커가 있습니다.  
Sender 대시보드에서 폼 임베드 코드를 받아 교체하거나, API 방식으로 연동하세요.

## Mixpanel 이벤트

| 이벤트 | 발생 시점 |
|---|---|
| `page_view` | 스퀴즈 페이지 진입 |
| `form_focus` | 이메일 폼 첫 클릭 |
| `form_submit` | 등록 완료 |
| `thank_you_view` | 감사 페이지 진입 |
| `webinar_register_view` | 웨비나 등록 페이지 진입 |
| `webinar_watch_view` | 웨비나 시청 페이지 진입 |
| `video_play` | 웨비나 영상 재생 시작 |
| `inflearn_click` | 인프런 구매 링크 클릭 |

`acquisition_path` 유저 프로퍼티로 경로별 전환율 분리 측정:
- `email_seq` — 이메일 시리즈 경로
- `webinar_cold` — SNS 웨비나 캠페인 경로
