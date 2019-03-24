export interface Theme {
  palette: ThemePalette
}

export interface ThemePalette {
  primary: ThemeColor
  accent: ThemeColor
  background: ThemeBackgroundColor
  text: string
  secondaryText: string
}

export interface ThemeBackgroundColor {
  default: string
  paper: string
}

export interface ThemeColor {
  dark: string
  main: string
  light: string
  contrast: string
}
