export const filterPet = (mainData: any, searchTerm: any) => {
  if (mainData !== null) {
    let filteredResources: any = [];
    let pets = mainData;
    if (searchTerm.length > 0) {
      // eslint-disable-next-line
      pets.filter((pet: any) => {
        if (
          pet["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        ) {
          filteredResources.push(pet);
        }
      });
    } else {
      return filteredResources;
    }
    console.log(filteredResources);
    return filteredResources;
  }
};
