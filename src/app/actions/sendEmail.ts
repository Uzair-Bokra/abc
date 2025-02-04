"use server"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  const data = {
    service_id: "YOUR_EMAILJS_SERVICE_ID",
    template_id: "YOUR_EMAILJS_TEMPLATE_ID",
    user_id: "YOUR_EMAILJS_USER_ID",
    template_params: {
      from_name: name,
      from_email: email,
      to_email: "onais.onlinework@gmail.com",
      message: message,
    },
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      return { success: true, message: "Message sent successfully!" }
    } else {
      return { success: false, message: "Failed to send message. Please try again." }
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "An error occurred. Please try again later." }
  }
}

