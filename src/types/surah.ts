export interface Verse {
  audio: {
    primary: string,
    secondary: Array<String>
  }
  meta: {
    juz: number,
    page: number,
    ruku: number,
  }
  number: {
    inQuran: number,
    inSurah: number,
  }
  tafsir: {
    id: {
      long: string,
      short: string,
    }
  }
  text: {
    arab: string,
    transliteration: {
      en: string,
    }
  }
  translation: {
    en: string,
    id: string,
  }
}


export interface Surah {
  name: {
    long: string,
    short: string,
    translation: {
      en: string,
      id: string,
    },
    transliteration: {
      en: string,
      id: string,
    }
  },
  number: number,
  numberOfVerses: number,
  sequence: number,
  tafsir: {
    id: string
  }
}


