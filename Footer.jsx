import React from "react";

function Footer() {
  let n = new Date();
  let v = n.getFullYear();
  return (
    <footer>
      <p>Copyright @ {v}</p>
    </footer>
  );
}
export default Footer;