import create from "zustand";
import { Surah } from "~/types/surah";

type SurahStore = {
  surah: Surah[];
  setSurah: (surah: Surah[]) => void;
}

const useSurahStore = create<SurahStore>(set => ({
  surah: [],
  setSurah: surah => set(prev => ({ ...prev, surah }))
}));

export default useSurahStore;
