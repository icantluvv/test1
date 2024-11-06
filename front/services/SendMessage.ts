export default async function SendMessage(username: string) {
  try {
    const response = await fetch(
      "https://functions.yandexcloud.net/d4efpp55qgfc2cvba8e9",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username })
      }
    )

    const result = await response.json()
    return result
  } catch {
    Error
  }
}
