import quotation from "../assets/icons/quotation.png";
import Card from "./Card";
import videoIcon from "../assets/icons/video.png";
import editIcon from "../assets/icons/edit.png";
import micriphoneIcons from "../assets/icons/microphone.png";
import topPicks_1 from "../assets/images/topPicks_1.jpg";
import topPicks_2 from "../assets/images/topPicks_2.jpg";
import topPicks_3 from "../assets/images/topPicks_3.jpg";
import topPicks_4 from "../assets/images/topPicks_4.jpg";

const FifthDiv = () => {
  return (
    <div className="fifth__div">
      <h2>
        <img src={quotation} alt="Quatitation" />
        Testimonials à la Belge
      </h2>
      <div className="fifthDiv__div">
        <Card
          imgProp={topPicks_1}
          spanProp={videoIcon}
          spanTxtProp="Video"
          h3Prop="Training course W"
          spanColorProp="#0C7EE9"
          pProp="“Because of this 2-day training, I feel more secure in my role & my future at work.”"
          h2TxtColorProp="#0C7EE9"
          btnColorProp="#8B8B8E"
          btnBgColorProp="#EAEFF5"
          btnContentProps={2}
        />
        <Card
          imgProp={topPicks_2}
          spanProp={micriphoneIcons}
          spanTxtProp="Podcast"
          h3Prop="Training course W"
          spanColorProp="#CD61ED"
          pProp="“Because of this 2-day training, I feel more secure in my role & my future at work.”"
          h2TxtColorProp="#CD61ED"
          btnColorProp="#8B8B8E"
          btnBgColorProp="#EAEFF5"
          btnContentProps={2}
        />
        <Card
          imgProp={topPicks_3}
          spanProp={editIcon}
          spanTxtProp="Article"
          h3Prop="Training course W"
          spanColorProp="#2C1DE5"
          pProp="“Because of this 2-day training, I feel more secure in my role & my future at work.”"
          h2TxtColorProp="#2C1DE5"
          btnColorProp="#8B8B8E"
          btnBgColorProp="#EAEFF5"
          btnContentProps={2}
        />
        <Card
          imgProp={topPicks_4}
          spanProp={editIcon}
          spanTxtProp="Article"
          h3Prop="Training course W"
          spanColorProp="#EBAA3F"
          pProp="“Because of this 2-day training, I feel more secure in my role & my future at work.”"
          h2TxtColorProp="#EBAA3F"
          btnColorProp="#8B8B8E"
          btnBgColorProp="#EAEFF5"
          btnContentProps={2}
        />
      </div>
    </div>
  );
};

export default FifthDiv;
