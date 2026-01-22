export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return { success: true, data: result };
    } else {
      throw new Error(result.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}
