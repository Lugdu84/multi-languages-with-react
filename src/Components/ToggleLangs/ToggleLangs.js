import React, {useContext} from 'react'
import FrenchFlag from "../../assets/france.svg"
import EnglishFlag from "../../assets/united-kingdom.svg"
import SpanishFlag from "../../assets/spain.svg"
import "./ToggleLangs.css"

export default function ToggleLangs() {
  return (
    <div className='container-langs'>
      <img src={FrenchFlag} alt="french flag" />
      <img src={EnglishFlag} alt="french flag" />
      <img src={SpanishFlag} alt="french flag" />
    </div>
  )
}
