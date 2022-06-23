import React from 'react'
import { useParams } from 'react-router-dom'

export default function index() {
  const { id } = useParams()
  return (
    <>
      <span> Surah {id}</span>
    </>
  )
}
