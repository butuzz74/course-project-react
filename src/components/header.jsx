import React from "react";

const Header = (usersData) => {
  return (
    <>
      {usersData.length > 4 || usersData.length === 1 ? (
        <h1 className="badge bg-primary fs-4">
          {`${usersData.length} человек тусанет с тобой сегодня`}
        </h1>
      ) : (
        <h1 className="badge bg-primary fs-4">
          {`${usersData.length} человека тусанет с тобой сегодня`}
        </h1>
      )}
    </>
  );
};

export default Header;
