const QuickLink = ({srcProps, colorProps}) => {
  return (
    <div className="quickLink__divs">
    <div style={{backgroundColor: colorProps}}>
      <img src={srcProps} alt="" />
    </div>
    <div>
      <p style={{color: colorProps}}>Perfect Training Match</p>
      <p>Take the test & find your training</p>
    </div>
  </div>
  )
}

export default QuickLink;