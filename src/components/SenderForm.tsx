'use client'

import Script from 'next/script'

export function SenderForm({ ctaText }: { ctaText?: string }) {
  void ctaText
  return (
    <div className="w-full">
      <Script
        id="sender-universal"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(s,e,n,d,er){s['Sender']=er;s[er]=s[er]||function(){(s[er].q=s[er].q||[]).push(arguments)},s[er].l=1*new Date();s[er].on=function(event,callback){s[er].listeners=s[er].listeners||{};(s[er].listeners[event]=s[er].listeners[event]||[]).push(callback);};var a=e.createElement(n),m=e.getElementsByTagName(n)[0];a.async=1;a.src=d;m.parentNode.insertBefore(a,m)})(window,document,'script','https://cdn.sender.net/accounts_resources/universal.js','sender');sender('5c68aefa639850')`,
        }}
      />
      <div
        style={{ textAlign: 'left' }}
        className="sender-form-field"
        data-sender-form-id="aM8lOR"
      />
      <p className="mt-3 text-center text-xs text-gray-400">
        이메일 입력 시 기술면접 관련 정보 수신에 동의하는 것으로 간주합니다. 언제든지 구독 취소 가능.
      </p>
    </div>
  )
}
