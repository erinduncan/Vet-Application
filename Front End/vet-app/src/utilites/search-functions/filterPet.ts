export const filterPet = (mainData: any, searchTerm: any) => {
  if (mainData !== null) {
    let filteredResources: any = [];
    let pet = mainData;
    console.log(pet);
    if (searchTerm.length > 0) {
      pet.filter((pet: any) => {
        if (
          `${pet["name"]}`.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
          -1
        ) {
          filteredResources.push(pet);
          console.log(pet);
        }
      });
    } else {
      return filteredResources;
    }
    console.log(filteredResources);
    return filteredResources;
  }
};
