let isLocked = false;

function LockScroll() {
  if (isLocked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
}

function LockScrollButton( {html, className} ) {
  return (
    <label
    className= {className}
    htmlFor="open-menu" 
    role="button"
    onClick={() => {
      isLocked = !isLocked;
      LockScroll();
    }}
    >{html}</label>
  );
}

export default LockScrollButton;