import { Surah } from "~/types/surah"
import fetcher from './fetcher'

export async function getAllSurah(): Promise<Surah[]> {
  try {
    const { data } = await fetcher.get('surah')
    return data.data
  } catch (error) {
    throw error
  }
}

export async function getSurah(id? : string): Promise<Surah> {
  try {
    const { data } = await fetcher.get(`surah/${id}`)
    console.log(data.data)
    return data.data
  } catch (error) {
    throw error
  }
}
