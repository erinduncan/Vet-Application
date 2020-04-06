export const filterEmployee = (mainData: any, searchTerm: any) => {
  if (mainData !== null) {
    let filteredResources: any = [];
    let employees = mainData;
    if (searchTerm.length > 0) {
      employees.filter((employee: any) => {
        if (
          `${employee["firstName"]} ${employee["lastName"]}`
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) !== -1
        ) {
          filteredResources.push(employee);
        }
      });
    } else {
      return filteredResources;
    }
    console.log(filteredResources);
    return filteredResources;
  }
};
