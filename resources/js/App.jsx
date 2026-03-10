import { useMemo } from 'react'
import { getWindowConfig } from './pages/window-config'
import LoginPage from './pages/LoginPage'
import LogoutWarning from './components/LogoutWarning'

export default function App() {
  if (window.location.pathname === '/login') {
    return <LoginPage />
  }

  const windowConfig = useMemo(() => getWindowConfig(1), [])

  return (
    <div className={windowConfig.gradientClass}>
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-12 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">
          React + JSX scaffold
        </p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
          {windowConfig.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          This project now boots a React app with JSX. Start editing
          <span className="font-semibold"> resources/js/App.jsx</span> and add
          routes, state, or data services as needed.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            className={`rounded-full px-6 py-2 text-sm font-semibold text-white shadow ${windowConfig.buttonGradient}`}
          >
            Primary action
          </button>
          <button
            type="button"
            className="rounded-full border border-white/30 px-6 py-2 text-sm font-semibold text-white/90 hover:border-white/60"
          >
            Secondary action
          </button>
        </div>
        <LogoutWarning onConfirm={() => (window.location.href = '/login')} />
      </main>
    </div>
  )
}
