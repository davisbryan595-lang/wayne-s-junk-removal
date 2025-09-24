// app/error.tsx
"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main style={{ textAlign: "center", padding: "4rem" }}>
      <h1>500 - Server Error</h1>
      <p>{error.message || "Something went wrong. Please try again later."}</p>
      <button onClick={() => reset()} style={{ marginTop: "1rem" }}>
        Try Again
      </button>
    </main>
  )
}
