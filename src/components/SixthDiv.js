import handShake from "../assets/icons/handshake.png";
import news from "../assets/icons/news.png";

import Card from "./Card";
import videoIcon from "../assets/icons/video.png";
import editIcon from "../assets/icons/edit.png";
import micriphoneIcons from "../assets/icons/microphone.png";
import sixthDiv_1 from "../assets/images/sixthDiv_1.jpg";
import sixthDiv_2 from "../assets/images/sixthDiv_2.jpg";
import sixthDiv_3 from "../assets/images/sixthDiv_3.jpg";

const SixthDiv = () => {
  return (
    <div className="sixth__div">
      <div className="sixtDiv__first">
        <div>
          <div className="sixthDiv__pattern"></div>
        </div>
        <div>
          <h2>
            Do you have a digital initiative that you’d like to share with
            Belgium and its citizens?
          </h2>
          <h4>
            <img src={handShake} alt="Hand Shake" />
            Become one of our trusted partners
          </h4>
          <p>
            Mauris augue neque gravida in. Amet consectetur adipiscing elit ut
            aliquam purus sit amet. Lectus mauris ultrices eros in cursus. Vel
            quam elementum pulvinar etiam non quam lacus suspendisse.
            <br /> <br /> <br /> Turpis massa sed elementum tempus. Pellentesque
            massa placerat duis ultricies lacus. Tincidunt nunc pulvinar sapien
            et. Scelerisque eleifend donec pretium vulputate sapien nec
            sagittis. Semper feugiat nibh sed pulvinar proin. Consectetur libero
            id faucibus nisl tincidunt. Nunc id cursus metus aliquam.
          </p>
          <button>I want to now more</button>
        </div>
      </div>
      <div className="sixthDiv__second">
        <h2>
          <img src={news} alt="News" />
          News from the Belgian scene
        </h2>
        <div className="sixthDiv__secondDiv">
          <Card
            imgProp={sixthDiv_1}
            spanProp={videoIcon}
            spanTxtProp="Video"
            h3Prop="Mauris augue neque gravida in."
            spanColorProp="#0C7EE9"
            pProp="“Mauris augue neque gravida in. Amet consectetur adipiscing elit ut aliquam purus sit amet. Lectus mauris ultrices eros in cursus.”"
            h2TxtColorProp="#0C7EE9"
            btnColorProp="#2D2E33"
            btnBgColorProp="white"
            btnContentProps={3}
            pColorProp="#8B8B8E"
            btnWidthProp="7.4rem"
            pMarginProp="2.15rem"
          />
          <Card
            imgProp={sixthDiv_2}
            spanProp={micriphoneIcons}
            spanTxtProp="Podcast"
            h3Prop="Urna nec tincidunt praesent semper feugiat"
            spanColorProp="#F68523"
            pProp="“Mauris augue neque gravida in. Amet consectetur adipiscing elit ut aliquam purus sit amet. Lectus”"
            h2TxtColorProp="#F68523"
            btnColorProp="#2D2E33"
            btnBgColorProp="white"
            btnContentProps={4}
            pColorProp="#8B8B8E"
            btnWidthProp="9rem"
          />
          <Card
            imgProp={sixthDiv_3}
            spanProp={editIcon}
            spanTxtProp="Article"
            h3Prop="Aliquam. Urna nec tincidunt praesent semper feugiat nibh."
            spanColorProp="#2C1DE5"
            pProp="“Mauris augue neque gravida in. Amet consectetur adipiscing elit ut aliquam purus sit amet. Lectus”"
            h2TxtColorProp="#2C1DE5"
            btnColorProp="#2D2E33"
            btnBgColorProp="white"
            btnContentProps={5}
            pColorProp="#8B8B8E"
            btnWidthProp="7.4rem"
          />
        </div>
      </div>
    </div>
  );
};

export default SixthDiv;
