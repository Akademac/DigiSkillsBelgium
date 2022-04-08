import linkIcon from "../assets/icons/link_icon.png";
import star from "../assets/icons/topPiks_star.png";
import quickLinks_1 from "../assets/icons/quickLinks_1.png";
import quickLinks_2 from "../assets/icons/quickLinks_2.png";
import quickLinks_3 from "../assets/icons/quickLinks_3.png";
import quickLinks_5 from "../assets/icons/quickLinks_5.png";
import quickLinks_6 from "../assets/icons/quickLinks_6.png";
import quickLinks_7 from "../assets/icons/quickLinks_7.png";
import topPicks_1 from "../assets/images/topPicks_1.jpg";
import topPicks_2 from "../assets/images/topPicks_2.jpg";
import topPicks_3 from "../assets/images/topPicks_3.jpg";
import topPicks_4 from "../assets/images/topPicks_4.jpg";
import videoIcon from "../assets/icons/video.png";
import editIcon from "../assets/icons/edit.png";
import micriphoneIcons from "../assets/icons/microphone.png";
import QuickLink from "./QuickLink";
import Card from "./Card";

const SecondDiv = () => {
  return (
    <div className="second__div">
      <div className="secondDiv__first">
        <h2>
          <img src={linkIcon} alt="Link Icon" />
          Quick Links
        </h2>
        <div className="quickLink__div">
          <QuickLink srcProps={quickLinks_1} colorProps="#0C7EE9" />
          <QuickLink srcProps={quickLinks_2} colorProps="#EBAA3F" />
          <QuickLink srcProps={quickLinks_3} colorProps="#050835" />
          <QuickLink srcProps={quickLinks_1} colorProps="#56BDFD" />
          <QuickLink srcProps={quickLinks_5} colorProps="#F68523" />
          <QuickLink srcProps={quickLinks_6} colorProps="#CD61ED" />
          <QuickLink srcProps={quickLinks_7} colorProps="#3100FD" />
          <QuickLink srcProps={quickLinks_6} colorProps="#873EFD" />
        </div>
      </div>
      <div className="secondDiv__second">
        <h2>
          <img src={star} alt="Star" />
          Top Picks
        </h2>
        <div className="topPicks__div">
          <Card
            imgProp={topPicks_1}
            spanProp={videoIcon}
            spanTxtProp="Video"
            h3Prop="Training course W"
            spanColorProp="#0C7EE9"
            pProp="“Because of this 2-day training, I feel more secure in my role & my future at work.”"
            btnContentProps={1}
          />
          <Card
            imgProp={topPicks_2}
            spanProp={micriphoneIcons}
            spanTxtProp="Podcast"
            h3Prop="Project X"
            spanColorProp="#CD61ED"
            pProp="““Because of this 2-day training, I feel more secure in my role & my future at work.””"
            btnContentProps={1}
          />
          <Card
            imgProp={topPicks_3}
            spanProp={editIcon}
            spanTxtProp="Articel"
            h3Prop="Digital Camp Y"
            spanColorProp="#2C1DE5"
            pProp="“Because of this 2-day training, I feel more secure in my role & my future at work.”"
            btnContentProps={1}
          />
          <Card
            imgProp={topPicks_4}
            spanProp={editIcon}
            spanTxtProp="Articel"
            h3Prop="Digital tool Z"
            spanColorProp="#050835"
            pProp="“Because of this 2-day training, I feel more secure in my role & my future at work.”"
            btnContentProps={1}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;
