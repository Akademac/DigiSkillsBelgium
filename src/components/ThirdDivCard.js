import btnArrowRight from "../assets/icons/arrow_right.png";


const ThirdDivCard = ({imgProp, h3Prop}) => {
  return (
    <div className="thirdDiv__card">
      <img src={imgProp} alt="" />
      <h3>{h3Prop}</h3>
      <button>View more <img src={btnArrowRight} alt="Arrow right" /></button>
    </div>
  )
}

export default ThirdDivCard;