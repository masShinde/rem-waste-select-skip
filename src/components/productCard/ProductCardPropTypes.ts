import { SkipType } from "../../screens/productList/ProductListPropTypes";
import { InfoTagPropTypes } from "../infoTag/InfoTagPropTypes";

export interface ProductCardPropTypes extends SkipType{
  img?: string;
  title?: string;
  subTitle?: string;
  price?: string;
  frequency?: string;
  description?: string;
  isSelected?: boolean;
  onCardClick?: (index: number) => void ;
  buttonText: string;
  infoTags: InfoTagPropTypes[]
}
