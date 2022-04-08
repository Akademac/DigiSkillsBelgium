import btnArrowRight from "../assets/icons/arrow_right.png";
import { useState } from "react";

const Card = ({
  imgProp,
  h3Prop,
  pProp,
  pColorProp,
  spanProp,
  spanTxtProp,
  spanColorProp,
  h2TxtColorProp,
  btnColorProp,
  btnBgColorProp,
  btnContentProps,
  btnWidthProp,
  pMarginProp,
  cardStyleProp,
}) => {
  let jsxElemnt;
  if (btnContentProps === 1) {
    jsxElemnt = (
      <>
        View more <img src={btnArrowRight} alt="Arrow right" />
      </>
    );
  } else if (btnContentProps === 2) {
    jsxElemnt = "John Doe";
  } else if (btnContentProps === 3) {
    jsxElemnt = (
      <>
        Watch this video <img src={btnArrowRight} alt="Arrow right" />
      </>
    );
  } else if (btnContentProps === 4) {
    jsxElemnt = (
      <>
        Listen to this podcast <img src={btnArrowRight} alt="Arrow right" />
      </>
    );
  } else if (btnContentProps === 5) {
    jsxElemnt = (
      <>
        Read this article <img src={btnArrowRight} alt="Arrow right" />
      </>
    );
  }

  return (
    <div className="card__divs">
      <div>
        <img src={imgProp} alt="" />
      </div>
      <div>
        <span style={{ backgroundColor: spanColorProp }} className="card_span">
          <img src={spanProp} alt="" />
          {spanTxtProp}
        </span>
        <h3 style={{ color: h2TxtColorProp }}>{h3Prop}</h3>
        <p style={{ color: pColorProp, marginTop: pMarginProp }}>{pProp}</p>
        <button
          style={{
            color: btnColorProp,
            backgroundColor: btnBgColorProp,
            width: btnWidthProp,
          }}
        >
          {jsxElemnt}
        </button>
      </div>
    </div>
  );
};

export default Card;
