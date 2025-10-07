import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(request: NextRequest) {
  try {
    // 1. Проверяем секрет, который теперь приходит в заголовке
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
    )

    if (!isValidSignature) {
      return new Response('Invalid secret', { status: 401 })
    }

    // 2. Вызываем функцию ревалидации
    // Тег 'sanity' мы добавили ранее в `sanityFetch`
    revalidateTag('sanity')

    console.log(`Revalidated cache for tag: sanity`)
    return NextResponse.json({ revalidated: true, now: Date.now(), body })

  } catch (error) {
    console.error('Error revalidating', error)
    return new Response('Error revalidating', { status: 500 })
  }
}