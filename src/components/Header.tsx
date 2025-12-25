import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img width={48} height={56} src="/img/logo.svg" alt="logo" />
      <h2>
        STUDENTS by <span>aesthet1c</span>
      </h2>
    </header>
  );
};
export default Header;
