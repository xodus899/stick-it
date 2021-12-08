import React from "react";

let date = new Date();
let year = date.getFullYear(); 

function Footer() {
  return (
    <footer> <div> Copyright  {year} </div> </footer>
  )
};

export default Footer;