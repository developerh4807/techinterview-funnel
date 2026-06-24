import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { MixpanelProvider } from '@/components/MixpanelProvider'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '기술면접 기출문제 자료집 무료 증정 | 개발자H',
  description:
    '실전 기술면접 기출문제 자료집을 무료로 받아보세요. 면접 탈락 원인 분석부터 꼬리질문 대응까지.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-gray-900">
        <MixpanelProvider>{children}</MixpanelProvider>
      </body>
    </html>
  )
}
