import megaphone from '../assets/icons/promotion.png'

const FourthDiv = () => {
  return (
    <div className="fourth__div">
      <div>
        <div className="fourthDiv__left">
          <h2> 
            <img src={megaphone} alt="Megaphone" />
             This week’s fantastical highlight
          </h2>
          <p>Mauris augue neque gravida in. Amet consectetur adipiscing elit ut aliquam purus sit amet. Lectus mauris ultrices eros in cursus. Vel quam elementum pulvinar etiam non quam lacus suspendisse. <br /> <br /> <br /> Turpis massa sed elementum tempus. Pellentesque massa placerat duis ultricies lacus. Tincidunt nunc pulvinar sapien et. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Semper feugiat nibh sed pulvinar proin. Consectetur libero id faucibus nisl tincidunt. Nunc id cursus metus aliquam.</p>
          <button>I want to know more</button>
        </div>
        <div className="fourthDiv__right"></div>
      </div> 
    </div>
  )
}

export default FourthDiv;