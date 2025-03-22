import { useMemo } from "react";
import "./styles.css"
import { InfoTagPropTypes } from "./InfoTagPropTypes";

export default function InfoTag(props: InfoTagPropTypes) {
  const {text, type} = props

  const infoTagStyle = useMemo(()=> {
    const backgroundColor = type === 'success' ? '#22bb33' : type === 'error' ? '#bb2124' : type === 'warning' ? '#f0ad4e' : '#5bc0de'
    const color = type === 'success' ? '#fff' : type === 'error' ? '#fff' : type === 'warning' ? '#fff' : '#fff'
    return {backgroundColor, color}
  },[type])

  return <div className="info-tag-wrapper" style={{...infoTagStyle}}>
    {text}
  </div>;
}
