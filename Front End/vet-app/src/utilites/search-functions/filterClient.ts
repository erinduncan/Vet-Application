export const filterClient = (mainData:any, searchTerm: any) => {
    if (mainData !== null) {
        let filteredResources:any = [];
        let clients = mainData;
        if (searchTerm.length > 0) {
            clients.filter((client:any) => {
                if (`${client["firstName"]} ${client["lastName"]}`.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    filteredResources.push(client);
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