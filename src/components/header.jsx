import React from "react";

const Header = (use) => {
  return (
    <>
      {use.length > 4 || use.length === 1 ? (
        <h1 className="badge bg-primary fs-4">
          {`${use.length} человек тусанет с тобой сегодня`}
        </h1>
      ) : !use.length ? (
        <h1 className="badge bg-danger fs-4">
          {`Никто не тусанет с тобой сегодня`}
        </h1>
      ) : (
        <h1 className="badge bg-primary fs-4">
          {`${use.length} человека тусанет с тобой сегодня`}
        </h1>
      )}
    </>
  );
};

export default Header;
