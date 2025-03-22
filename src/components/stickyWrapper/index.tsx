import { getStyleByType } from "../../utils.ts";
import { StickyWrapperPropTypes } from "./StickyWrapperPropTypes";
import "./styles.css"

export default function StickyWrapper({children, isBottom= false, style, type}: StickyWrapperPropTypes){
    return <div className={`${isBottom ? 'sticky-container-bottom' : 'sticky-container-top' }`} style={{...getStyleByType(type),...style}}>
        {children}
    </div>
}