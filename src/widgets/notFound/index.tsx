import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Товары не найдены :(</h1>
      <div>
        <Link href="/">Вернуться домой</Link>
      </div>
    </div>
  );
};

export default NotFound;
