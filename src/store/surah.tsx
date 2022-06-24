import create from "zustand";
import { Surah } from "~/types/surah";

type SurahStore = {
  surah: Surah[];
  filterSurah: Surah[];
  setSurah: (surah: Surah[]) => void;
  setFilterSurah: (payload: string) => void
}

const useSurahStore = create<SurahStore>(set => ({
  surah: [],
  filterSurah : [],
  setSurah: (surah: Surah[]) => set(state => ({ ...state, surah, filterSurah : surah })),
  setFilterSurah: (payload: string) => set(state => ({
    ...state,
    filterSurah: filterSurah(state.surah, payload)
  }))
}));


function filterSurah(listSurah: Surah[], payload: string): Surah[] {
  return listSurah.filter(surah => {
    return surah.name.transliteration.id
      .toLowerCase()
      .split("-")
      .join(" ")
      .match(payload);
  });
}
export default useSurahStore;
