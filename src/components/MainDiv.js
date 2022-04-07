import searchIcon from '../assets/icons/search_icon.png';
import briefcaseIcon from '../assets/icons/briefcase.png';
import arrowDown from '../assets/icons/arrow_down.png';

const MainDiv = () => {
  return (
    <div className="main__div">
      <div className="mainDiv__leftPattern"></div>
      <h1>The home of digital skills in Belgium</h1>
      <p>Discover your perfect training match or explore our ambitious digital initiatives!</p>
      <div className="main__search">
        <img src={searchIcon} alt="Search Icon" />
        <input type="text" placeholder='Search topics'/>
        <span></span>
        <img src={briefcaseIcon} alt="Briefcase" />
        <p>Search project</p>
        <img src={arrowDown} alt="Arrow Down" />
        <span></span>
        <button>Start my search</button>
      </div>
      <p>Or enjoy a little browsing!</p>
      <div className="mainDiv__rightPattern"></div>
    </div>
  )
}

export default MainDiv;