import React from 'react'

type SurahCardProps = {
  name : string,
  nameShort : string,
  translation : string,
  number : number,
  numberOfVerses : number,
}

const SurahCard : React.FC<SurahCardProps> = ({name, number, nameShort, translation, numberOfVerses}) => {
  return (
    <div>
      <div>
        <span>{number}</span>
      </div>
      <div>
        <h3>{name}</h3>
        <span>{translation}</span>
      </div>
      <div>
        <p>{nameShort}</p>
        <span>{numberOfVerses} ayat</span>
      </div>
    </div>
  )
}

export default SurahCard
