import rocketIcon from '../assets/icons/rocket.png'
import ThirdDivCard from './ThirdDivCard';
import thirdDivCard_1 from '../assets/images/thirdDivCard_1.jpg'
import thirdDivCard_2 from '../assets/images/thirdDivCard_2.jpg'
import thirdDivCard_3 from '../assets/images/thirdDivCard_3.jpg'

const ThirdDiv = () => {
  return (
    <div className="third__div">
      <h2>
        <img src={rocketIcon} alt="Rocket" />
        Our most ambitious initiatives
      </h2>
      <div className="thirdDiv__div">
        <ThirdDivCard imgProp={thirdDivCard_1} h3Prop='Hack Your Future' />
        <ThirdDivCard imgProp={thirdDivCard_2} h3Prop='BeCode Belgium' />
        <ThirdDivCard imgProp={thirdDivCard_3} h3Prop='my UQ Skills' />
      </div>
    </div>
  )
}

export default ThirdDiv;