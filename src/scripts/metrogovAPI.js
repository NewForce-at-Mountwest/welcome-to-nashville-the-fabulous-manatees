const parksPull = {
    getAllParks: () => {
        return fetch("http://localhost:3000/parks")
            .then(parkLocations => parkLocations.json())
            .then(parks => parkFx.searchParks(criteria, parks)
                )
            }
    }