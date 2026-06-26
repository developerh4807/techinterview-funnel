import Image from 'next/image'
import styles from './PdfMockup.module.css'

export function PdfMockup() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scene}>
        <div className={styles.book}>
          <Image
            src="/images/free_bait_cover.png"
            alt="기술면접 합격 대비 가이드 PDF"
            width={2400}
            height={3396}
            className={styles.cover}
            quality={90}
            priority
          />
          <div className={styles.spine} />
          <div className={styles.pages} />
        </div>
        <div className={styles.shadow} />
      </div>
    </div>
  )
}
