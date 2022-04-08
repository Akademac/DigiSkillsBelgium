import darkPlay from '../assets/icons/play.png'
import lightPlay from '../assets/icons/video.png'
import shakeHands from '../assets/icons/handshake.png'

const SeventhDiv = () => {
  return (
    <div className="seventh__div">
      <div className="seventhDiv__first">
        <div className="seventhDiv_firstLeft">
        <h2>
        <img src={darkPlay} alt="Hand Shake" />
        Your perfect training match
          </h2>
          <h4>
          Take the free myUQ Skills test to discover your talents!
          </h4>
          <p>
          Mauris augue neque gravida in. Amet consectetur adipiscing elit ut aliquam purus sit amet. Lectus mauris ultrices eros in cursus. Vel quam elementum pulvinar etiam non quam lacus suspendisse. <br /> <br />Turpis massa sed elementum tempus. Pellentesque massa placerat duis ultricies lacus. Tincidunt nunc pulvinar sapien et. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Semper feugiat nibh sed pulvinar proin. Consectetur libero id faucibus nisl tincidunt. Nunc id cursus metus aliquam.
          </p>
          <button>Take the test!</button>
        </div>
        <div className="seventhDiv_firstRight">
          <div className='seventhDiv_firstRightInner'>
            <div className='overlay'></div>
            <img src={lightPlay} alt="Play button" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="seventhDiv__second">
        <div></div>
        <div>
          <h2>
            <img src={shakeHands} alt="Shake hands" />
            Do you have any questions?
          </h2>
          <p>Ask our team!</p>
          <button>Get in touch</button>
        </div>
      </div>
    </div>
  )
}

export default SeventhDiv;
