import React from 'react'

function Footer() {
  return (
    <div id="footer" className="text-center bg-dark mt-5 p-2 navbar-static-bottom">
      <span className="text-light">&copy; {new Date().getFullYear()} All Rights Reserved</span>
    </div>
  )
}


export default Footer;
