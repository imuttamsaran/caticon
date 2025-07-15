import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav_inner">
        <div className="nav_logo">
          <span className="nav_brand">CatIcon</span>
        </div>
        <ul className="nav_list">
          <li><a href="#" className="nav_link">Home</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
