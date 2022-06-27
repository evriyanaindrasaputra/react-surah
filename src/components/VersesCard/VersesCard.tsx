import React from 'react'
import { Verse } from '~/types/surah'

type VersesCardProps = {
  verse: Verse;
}
type Ref  = HTMLDivElement

const VersesCard = React.forwardRef<Ref, VersesCardProps>((props, ref) => {
  return (
    <div id={`verse-${props.verse.number.inSurah.toString()}`} ref={ref} className=' border-b-2 border-b-gray-200 px-4 py-8'>
      <p >{props.verse.number.inSurah}</p>
      <p className=' text-right'>{props.verse.text.arab}</p>
      <audio controls>
        <source src={props.verse.audio.primary} type="audio/mpeg" />
      </audio>
      <p>{props.verse.text.transliteration.en}</p>
    </div>
  )
})

export default VersesCard
