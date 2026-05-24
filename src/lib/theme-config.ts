export type Theme = "light" | "dark"

export const THEME_STORAGE_KEY = "portfolio-theme"

export function getSystemTheme(): Theme {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }
  return "dark"
}

export function getStoredTheme(): Theme | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === "light" || stored === "dark") return stored
  }
  return null
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light")
}
