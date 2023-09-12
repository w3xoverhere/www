export class ThemeConfClass {
  public mode: 'light' | 'dark';
  public palette: ThemePalette;
  public text: ThemeText = {
    fontFamily: defaultFontFamilyList,
    fontSize: '12px',
  };
  public defaultBg: string;

  constructor(
    mode: 'light' | 'dark',
    palette: ThemePalette,
    defaultBg: string,
    text?: ThemeText
  ) {
    this.mode = mode;
    this.palette = palette;
    this.defaultBg = defaultBg;
    if (text) {
      this.text = text;
    }
  }
}

const defaultFontFamilyList = ['RobotoMedium', 'RobotoThin'];

interface ThemePalette {
  primary: string;
  secondary: string;
  third: string;
  error: string;
  warning: string;
}

interface ThemeText {
  fontFamily: Array<string>;
  fontSize: string;
}
