import { OverViewCardPropTypes } from "./OverViewCardPropTypes"
import "./styles.css"

export default function OverViewCard(props: OverViewCardPropTypes){
    const {text, buttonText} = props

    return (
        <div className="over-view-card-container">
            <div className="selected-item">
                <p>{text}</p>
            </div>
            {!!buttonText && <button className="over-view-card-button">
                {buttonText}
            </button>}
        </div>
    )

}