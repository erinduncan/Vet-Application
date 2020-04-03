export const sortClient = (sortType: any, element: any) => {
  if (sortType === "ascending") {
    let sortedElements = element.sort((a: any, b: any): any => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
    });
    return sortedElements;
  }
};