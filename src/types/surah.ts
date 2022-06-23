export interface Surah {
  name : {
    long : string,
    short : string,
    translation : {
      en : string,
      id : string,
    },
    transliteration : {
      en : string,
      id : string,
    }
  },
  number : number,
  numberOfVerses : number,
  sequence : number,
  tafsir : {
    id: string
  }
}
