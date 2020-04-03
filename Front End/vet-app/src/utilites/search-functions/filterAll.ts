export const filterAll = (mainData: any, searchTerm: any) => {
  if (mainData !== null) {
    let filteredResources;
    let employee = mainData["employee"];
    let client = [mainData["client"]];
    let pet = mainData["pet"];
    if (searchTerm.length > 0) {
      filteredResources = employee.filter((employee: any) => {
        return (
          employee["firstName"]
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) !== -1
        );
      });

      client.filter(client => {
        if (
          client["firstName"]
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) !== -1 ||
          client["lastName"].toLowerCase().indexOf(searchTerm.toLowerCase()) !==
            -1
        ) {
          filteredResources.push(client);
        }
      });

      pet.filter((pet: any) => {
        if (
          pet["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        ) {
          filteredResources.push(pet);
        }
      });
    }
    return filteredResources;
  }
};
