import { useLayoutEffect, useState } from "react";

const sortMap = {
  higher: (list, sortProp) => [...list].sort((a, b) => b[sortProp] - a[sortProp]),

  lower: (list, sortProp) => [...list].sort((a, b) => a[sortProp] - b[sortProp]),

  newest: (list) =>
    [...list].sort((a, b) => {
      let dateA = new Date(a.createdAt);
      let dateB = new Date(b.createdAt);
      return dateB - dateA;
    }),

  A_Z: (list) =>
    [...list].sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    }),

  Z_A: (list) =>
    [...list].sort((a, b) => {
      if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return -1;
      }
      if (b.title.toLowerCase() > a.title.toLowerCase()) {
        return 1;
      }
      return 0;
    }),
};

export const useFilterBySorted = (list, sortProp, initMode = "default") => {
  const [sortedList, setSortedList] = useState(list);
  const [sortMode, setSortMode] = useState(initMode);

  const onSort = (event) => {
    setSortMode(event.target.value);
  };

  useLayoutEffect(() => {
    setSortedList(sortMode === "default" ? list : sortMap[sortMode](list, sortProp));
  }, [sortMode, sortProp, list]);

  return { onSort, sortedList, setSortMode, sortMode };
};
