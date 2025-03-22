import { useMemo } from "react";
import "./styles.css"
import { InfoTagPropTypes } from "./InfoTagPropTypes";
import { getStyleByType } from "../../utils.ts";

export default function InfoTag(props: InfoTagPropTypes) {
  const {text, type} = props

  const infoTagStyle = useMemo(()=> {
    return getStyleByType(type)
  },[type])

  return <div className="info-tag-wrapper" style={{...infoTagStyle}}>
    {text}
  </div>;
}
