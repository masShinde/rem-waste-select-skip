import { useMemo, memo } from "react";
import { truncateString } from "../../utils.ts";
import InfoTag from "../infoTag/index.tsx";
import { ProductCardPropTypes } from "./ProductCardPropTypes";
import "./styles.css"
import { InfoTagPropTypes } from "../infoTag/InfoTagPropTypes.ts";

export default memo(function ProductCard(props: ProductCardPropTypes) {

    const {id, title, subTitle, price, description, frequency, img, infoTags, isSelected, onCardClick, buttonText} = props
  
    return <div className={ `product-card-wrapper ${isSelected && 'product-item-selected'}`} >
      {!!img && <div className="product-card-img">
          <img alt={"4yard skip"} src={img} />
      </div>}
      <div className="product-card-details">
          <div className="info-list-wrapper">
            {infoTags?.map((tag: InfoTagPropTypes, index: number) => <InfoTag {...tag} key={index} />)}
          </div>
          <div className="details-wrapper">
              <p className="card-title" >{truncateString(title, 25)}</p>
              <p className="card-sub-title" >{truncateString(subTitle, 30)}</p>
              <p className="card-description" >{truncateString(description, 30)}</p>
              <p className="card-price" >{truncateString(price, 10)}/{truncateString(frequency, 10)}</p>
          </div>
          <button className={ `${isSelected && 'product-item-button-selected'}`} onClick={() => {onCardClick?.(id)}}>{buttonText}</button>
      </div>
    </div>;
}
)