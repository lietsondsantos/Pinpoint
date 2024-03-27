import { create } from 'zustand'

type themeT = {
  theme: string
  setTheme: (newTheme: string) => void
}

const useTheme = create<themeT>()(set => ({
  theme: 'light',
  setTheme: newTheme => set({ theme: newTheme }),
}))

export default useTheme
