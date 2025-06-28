function LockScrollButton( {html, className, setOverlay } ) {
  return (
    <label
    className= {className}
    htmlFor="open-menu" 
    role="button"
    onClick={() => {
      setOverlay(true);
      document.body.style.overflow = "hidden";
    }}
    >{html}</label>
  );
}

export default LockScrollButton;