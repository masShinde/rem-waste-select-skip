import { StickyWrapperPropTypes } from "./StickyWrapperPropTypes";
import "./styles.css"

export default function StickyWrapper({children, style}: StickyWrapperPropTypes){
    return <div className="sticky-container" style={style}>
        {children}
    </div>
}