export const sortPet = (sortType: any, element: any) => {
  if (sortType === "ascending") {
    // eslint-disable-next-line
    let sortedElements = element.sort((a: any, b: any): any => {
      if (a.name < b.name) {
        return 1;
      }

      if (a.name > b.name) {
        return -1;
      }
    });
    return sortedElements;
  } else if (sortType === "descending") {
    // eslint-disable-next-line
    let sortedElements = element.sort((a: any, b: any): any => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
    });
    return sortedElements;
  }
};
