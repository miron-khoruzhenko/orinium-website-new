import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(request: NextRequest) {
  // Добавляем логи для отладки
  console.log('Revalidation endpoint hit!');

  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
    )

    console.log(`Webhook signature validation: ${isValidSignature}`);

    if (!isValidSignature) {
      return new Response('Invalid secret', { status: 401 })
    }

    const tag = 'sanity'; // Наш тег для ревалидации
    revalidateTag(tag);

    console.log(`Successfully revalidated cache for tag: ${tag}`);
    console.log('Request body:', body); // Посмотрим, что прислал Sanity
    return NextResponse.json({ revalidated: true, now: Date.now() })

  } catch (error: any) {
    console.error('Error in revalidation endpoint:', error);
    return new Response(error.message, { status: 500 })
  }
}