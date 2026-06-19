import { toPng } from 'html-to-image'

export async function downloadPoster(el: HTMLElement, filename: string): Promise<void> {
  const dataUrl = await toPng(el, {
    quality: 0.95,
    pixelRatio: 2,
    backgroundColor: '#ffffff',
  })

  const link = document.createElement('a')
  link.download = filename
  link.href = dataUrl
  link.click()
}

export async function sharePoster(el: HTMLElement, filename: string): Promise<void> {
  const dataUrl = await toPng(el, {
    quality: 0.95,
    pixelRatio: 2,
    backgroundColor: '#ffffff',
  })

  const blob = await (await fetch(dataUrl)).blob()
  const file = new File([blob], filename, { type: 'image/png' })

  if (navigator.share && navigator.canShare({ files: [file] })) {
    await navigator.share({
      title: '我的 MBTI 人格类型',
      files: [file],
    })
  } else {
    // Fallback to download
    const link = document.createElement('a')
    link.download = filename
    link.href = dataUrl
    link.click()
  }
}
