import React, { useState } from "react";
import IconModal from "./IconModal";
import allIcons from "../data/allIcons";

function IconGallery() {
  const [filter, setFilter] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const filteredIcons = allIcons.filter(icon =>
    icon.toLowerCase().includes(filter.toLowerCase())
  );

  const onIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <>
      <div className="icon-gallery">
        <div className="topClass">
          <h2>Collection</h2>
          <input
            type="text"
            className="search-input"
            placeholder="Search icons"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          /></div>
        <div className="icon-grid">
          {filteredIcons.map(icon => (
            <div
              className="icon-box"
              key={icon}
              onClick={() => onIconClick(icon)}
            >
              <img
                src={`/svgIcon/${icon}.svg`}
                alt={icon}
                className="icon-img"
              />
              <p className="icon-label">{icon}</p>
            </div>
          ))}
        </div>
      </div>

      <IconModal icon={selectedIcon} onClose={() => setSelectedIcon(null)} />
    </>
  );
}

export default IconGallery;
