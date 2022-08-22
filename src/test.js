import React from "react";
import _ from "lodash";
export default function Test() {
  const prevArr = [1, 3, [7, [6, 5], 4], 3, [2, [2, 3], 4, 5], 6, 7, 8, 9];
  const users = [
    { user: "fred", age: 48 },
    { user: "barney", age: 34 },
    { user: "fred", age: 40 },
    { user: "barney", age: 36 },
  ];
  

  //   const newArr = _.fill(prevArr, "hello baby !", 1, 4);
  const newArr = _.flattenDeep(prevArr);
  console.log(_.orderBy(users, ["user", "age"], ["asc", "desc"]));
  console.log(newArr, _.flatten(prevArr));
  return <div></div>;
}
