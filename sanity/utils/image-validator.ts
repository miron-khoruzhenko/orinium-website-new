import { Rule } from 'sanity'

type RatioOptions = {
  width: number;
  height: number;
}

/**
 * ФАБРИКА: Создает и возвращает правило валидации для соотношения сторон.
 * @param options - Объект с желаемой шириной и высотой.
 * @returns Функция, которую Sanity использует для валидации.
 */
export const imageRatioValidation = (options: RatioOptions) => {
  // 👇 Возвращаем функцию, которую вызовет Sanity, передав в нее `Rule`
  return (Rule: Rule) => Rule.custom(async (value, context) => {
    if (!value) return true;
    
    const client = context.getClient({ apiVersion: '2025-10-06' });
    const imageAssetId = (value as { asset?: { _ref?: string } })?.asset?._ref;
    if (!imageAssetId) return true;

    const asset = await client.fetch(`*[_id == $id][0]`, { id: imageAssetId });
    if (!asset?.metadata?.dimensions) return true; // Добавим проверку на случай отсутствия метаданных

    const { width, height } = asset.metadata.dimensions;

    const targetRatio = options.width / options.height;
    const imageRatio = width / height;

    if (Math.abs(imageRatio - targetRatio) > 0.01) {
			return `Recommended aspect ratio is ${options.width / options.height}:1 (e.g., ${options.width}x${options.height}px). Current size: ${width}x${height}px.`;

    }

    return true;
  }).warning();
};