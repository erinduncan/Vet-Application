export const filterClient = (mainData:any, searchTerm: any) => {
    if (mainData !== null) {
        let filteredResources:any = [];
        let client = mainData;
        console.log(client);
        if (searchTerm.length > 0) {
            client.filter((client:any) => {
                if (`${client["firstName"]} ${client["lastName"]}`.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(client);
                    console.log(client);
                };
            });
        } 
        else {
            return filteredResources;
        }
        console.log(filteredResources);
        return filteredResources;
    }
}