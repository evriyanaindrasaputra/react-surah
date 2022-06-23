import {Surah} from "~/types/surah"
import fetcher from './fetcher'

export async function getAllSurah() : Promise<Surah[]>{
  try {
    const {data} =  await fetcher.get('surah')
    return data
  } catch (error) {
    throw error
  }
}
