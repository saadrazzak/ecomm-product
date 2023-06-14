import React, { useState } from 'react';
import imageBlack  from "../../assets/logo-1.png";
import imageColor  from "../../assets/logo-2.png";
function Logo() {
  const [isLogoToggled, setIsLogoToggled] = useState(false);

  const handleLogoToggle = () => {
    setIsLogoToggled(!isLogoToggled);
  };
  const logoStyle = {
    width: '220px',
    height: 'auto',
  };
  return (
    <div>
      <img
       style={logoStyle}
        src={isLogoToggled ? imageBlack : imageColor}
        alt="Logo"
        onMouseEnter={handleLogoToggle}
        onMouseLeave={handleLogoToggle}
      />
    </div>
  );
}

export default Logo;
