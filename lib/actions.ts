// Определяем тип для данных, которые принимает наша функция
type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  token: string;
};

/**
 * Отправляет данные контактной формы на наш Route Handler.
 * @param data - Данные из формы.
 * @returns Объект с результатом операции: { success: boolean; error?: string }
 */
export async function sendContactForm(data: ContactFormData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Если сервер ответил ошибкой, получаем текст ошибки
      const errorData = await response.json();
      throw new Error(errorData.error || 'Server responded with an error');
    }

    // Если всё прошло успешно
    return { success: true };

  } catch (error) {
    console.error('Failed to submit form:', error);
    // В случае ошибки возвращаем флаг `success: false` и текст ошибки
    return { success: false, error: (error as Error).message };
  }
}