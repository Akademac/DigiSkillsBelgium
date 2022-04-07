import btnArrowRight from "../assets/icons/arrow_right.png";

const Card = ({
  imgProp,
  h3Prop,
  pProp,
  spanProp,
  spanTxtProp,
  spanColorProp,
  h2TxtColorProp,
  btnColorProp,
  btnBgColorProp,
}) => {
  return (
    <div className="card__divs">
      <div>
        <img src={imgProp} alt="" />
      </div>
      <div>
        <span
          style={{ backgroundColor: spanColorProp }}
          className="card_span"
        >
          <img src={spanProp} alt="" />
          {spanTxtProp}
        </span>
        <h3 style={{color: h2TxtColorProp}}>{h3Prop}</h3>
        <p>{pProp}</p>
        <button style={{color: btnColorProp, backgroundColor: btnBgColorProp}}>
          View more <img src={btnArrowRight} alt="Arrow right" />
        </button>
      </div>
    </div>
  );
};

export default Card;
