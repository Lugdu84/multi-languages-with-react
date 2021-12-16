import React, {useContext} from 'react'
import FrenchFlag from "../../assets/france.svg"
import EnglishFlag from "../../assets/united-kingdom.svg"
import SpanishFlag from "../../assets/spain.svg"
import "./ToggleLangs.css"
import { Context } from "../../context/LangContext";

export default function ToggleLangs() {

  const {toggleLang} = useContext(Context)
  return (
    <div className='container-langs'>
      <img src={FrenchFlag} alt="french flag" onClick={() => toggleLang("FR")}/>
      <img src={EnglishFlag} alt="english flag" onClick={() => toggleLang("EN")}/>
      <img src={SpanishFlag} alt="spanish flag" onClick={() => toggleLang("ES")}/>
    </div>
  )
}
