import { useState } from 'react'

export default function LogoutWarning({ onConfirm }) {
  const [showWarning, setShowWarning] = useState(false)

  const handleLogoutClick = () => {
    setShowWarning(true)
  }

  const handleCancel = () => {
    setShowWarning(false)
  }

  const handleConfirm = () => {
    setShowWarning(false)
    if (onConfirm) {
      onConfirm()
    }
  }

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={handleLogoutClick}
        className="rounded-full border border-rose-300/50 px-6 py-2 text-sm font-semibold text-rose-100 transition hover:border-rose-200 hover:text-white"
      >
        Logout
      </button>

      {showWarning && (
        <div
          className="mt-4 rounded-2xl border border-amber-400/40 bg-amber-500/10 p-5 text-amber-50 shadow-lg"
          role="alert"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">
                Confirm logout
              </p>
              <p className="mt-2 text-sm text-amber-100/90">
                You are about to log out. Make sure your work is saved before
                leaving.
              </p>
            </div>
            <button
              type="button"
              onClick={handleCancel}
              aria-label="Dismiss logout warning"
              className="text-amber-200/80 transition hover:text-amber-50"
            >
              x
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleConfirm}
              className="rounded-full bg-amber-400/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-amber-300"
            >
              Log out
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-full border border-amber-200/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 transition hover:border-amber-200/70"
            >
              Stay signed in
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
