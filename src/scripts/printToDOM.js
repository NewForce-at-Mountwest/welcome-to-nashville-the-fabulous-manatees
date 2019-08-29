var parkSearchCriteria =  park.filter(function(criteria) {
    return `<p>${park.park_name} at ${park.mapped_location_address} in ${park.mapped_location_city}, ${park.mapped_location_state}`
    // if ()has a ${criteria}.
});

const parksOutput = document.querySelector("#outputParks")
