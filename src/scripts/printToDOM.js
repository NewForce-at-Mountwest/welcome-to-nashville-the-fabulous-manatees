var parkSearchCriteria = park.filter(function(criteria) {
    
    if (park.criteria==="Yes"){
        return `<p>${park.park_name} at ${park.mapped_location_address} in ${park.mapped_location_city}, ${park.mapped_location_state} has a ${criteria}`
    }else{
        return `<p>${park.park_name} at ${park.mapped_location_address} in ${park.mapped_location_city}, ${park.mapped_location_state} does not have a ${criteria}`
    }
    });

const parksOutput = document.querySelector("#outputParks")
