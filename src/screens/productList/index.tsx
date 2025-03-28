import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { SkipType } from "./ProductListPropTypes";
import ProductCard from "../../components/productCard";
import { InfoTagPropTypes } from "../../components/infoTag/InfoTagPropTypes";
import StickyWrapper from "../../components/stickyWrapper";
import OverViewCard from "../../components/overviewCard";

export default function ProductList() {
  const [skips, setSkips] = useState<SkipType[]>([]);
  const [selectedId, setSelectedId] = useState(-1);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const timerId = useRef<number>(null)
  const fetchSkips = async () => {
    try {
      const skips = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );
      const response = await skips.json();
      return response;
    } catch (err) {
      return [];
    }
  };

  useEffect(() => {
    fetchSkips().then((value) => {
      const updatedValue = value?.map((skip: SkipType) => ({
        ...skip,
        img: "https://skiphirecomparison.co.uk/wp-content/uploads/2016/09/skip-hire-comparison-4yd-1.jpg",
      }));
      setSkips(updatedValue);
    });

    return () => {
      timerId.current && clearTimeout(timerId.current)
    }
  }, []);

  const handleCardSelection = (id: number) => {
    if (selectedId === id) setSelectedId(-1);
    else setSelectedId(id);
  };

  const onNextButtonClick = () => {
    setIsNextClicked(true);
    timerId.current = setTimeout(() => {
      timerId.current = null;
      setIsNextClicked(false);
    }, 5000);
  };

  return (
    <>
      {isNextClicked && (
        <StickyWrapper
          type={"success"}
          style={{
            width: "auto",
            padding: "0 1rem",
            borderRadius: "1rem",
            minWidth: "20rem",
          }}
        >
          <p>You clicked on Next</p>
        </StickyWrapper>
      )}
      <div className="product-list-container">
        {skips?.map((skip: SkipType) => {
          const {
            id,
            size,
            hire_period_days,
            img,
            price_before_vat,
            vat,
            allowed_on_road,
            allows_heavy_waste,
          } = skip;

          const tags: InfoTagPropTypes[] = [];
          allows_heavy_waste &&
            tags.push({ text: "Heavy Waste Allowed", type: "success" });
          allowed_on_road &&
            tags.push({ text: "Allowed on Road", type: "success" });

          return (
            <ProductCard
              img={img}
              key={id}
              title={`${size} yard skip`}
              subTitle={`${hire_period_days} days hire period`}
              price={`€${price_before_vat + vat} `}
              frequency={" week"}
              buttonText={selectedId === id ? "Selected" : "Select Skip"}
              isSelected={selectedId === id}
              infoTags={tags}
              onCardClick={handleCardSelection}
              {...skip}
            />
          );
        })}
      </div>
      {selectedId > -1 && (
        <StickyWrapper type="" isBottom>
          <OverViewCard
            onButtonClick={onNextButtonClick}
            text={`${
              skips?.find((skip) => skip.id === selectedId)?.size
            } Skip Selected`}
            buttonText={"Next"}
          />
        </StickyWrapper>
      )}
    </>
  );
}
