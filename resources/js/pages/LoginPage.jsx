import { useEffect, useRef, useState } from 'react'

const LOGIN_DELAY_MS = 1800

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isLoading) return

    setIsLoading(true)
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false)
    }, LOGIN_DELAY_MS)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-12">
      <main className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-md items-center">
        <section className="w-full rounded-2xl border border-white/15 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-indigo-300/90">
              Account Access
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Sign In</h1>
            <p className="mt-2 text-sm text-slate-300">
              Enter your credentials to continue.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">
                User ID
              </span>
              <input
                type="text"
                name="userid"
                autoComplete="username"
                placeholder="Enter user ID"
                disabled={isLoading}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">
                Password
              </span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter password"
                disabled={isLoading}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? 'Signing in...' : 'Login'}
            </button>

            {isLoading && (
              <div className="flex flex-col items-center gap-2 pt-2 text-xs text-slate-300">
                <div
                  className="google-loader"
                  role="status"
                  aria-live="polite"
                  aria-busy="true"
                >
                  <span className="google-dot google-dot--blue" />
                  <span className="google-dot google-dot--red google-dot-delay-1" />
                  <span className="google-dot google-dot--yellow google-dot-delay-2" />
                  <span className="google-dot google-dot--green google-dot-delay-3" />
                </div>
                <span>Signing you in</span>
              </div>
            )}
          </form>
        </section>
      </main>
    </div>
  )
}
