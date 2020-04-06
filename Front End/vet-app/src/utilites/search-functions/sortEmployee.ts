export const sortEmployee = (sortType: any, element: any) => {
    if (sortType === "ascending") {
      // eslint-disable-next-line
      let sortedElements = element.sort((a: any, b: any): any => {
        if (a.lastName < b.lastName) {
          return -1;
        }
        if (a.lastName > b.lastName) {
          return 1;
        }
      });
      return sortedElements;
    } else if (sortType === "descending") {
      // eslint-disable-next-line
      let sortedElements = element.sort((a: any, b: any): any => {
        if (a.lastName < b.lastName) {
          return 1;
        }
        if (a.lastName > b.lastName) {
          return -1;
        }
      });
      return sortedElements;
    }
  };