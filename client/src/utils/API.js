// route to get logged in user's info (needs the token)
export const getMe = (token) => {

    console.log('🔑 MY TOKEN: ', token);

    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {

    console.log('🧑‍🚀 USER DATA: ', userData);

    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {

    console.log('🧑‍🚀 USER DATA: ', userData);

    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

// save book data for a logged in user
export const saveDestination = (destinationData, token) => {

    console.log('💽 DESTINATION  DATA: \n', destinationData);
    console.log('🪙 Token: ', token);

    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(destinationData),
    });
};

// remove saved destination data for a logged in user
export const deleteDestination = (destinationId, token) => {

    console.log('🆔 DESTINATION ID: \n', destinationId);
    console.log('🪙 Token: ', token);

    return fetch(`/api/users/destinations/${destinationId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};

export const getDestinationsFromApi = (token) => {

    // console.log('🆔 DESTINATION ID: \n', destinationId);
    console.log('🪙 Token: ', token);

    return fetch(`/api/users/destinations`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};

// NOTE: Could fetch information from an additional API here.
export const NAME_OF_FUNCTION = (query) => {
    // insert api url
    return fetch(`https://www.API_URL${query}`);
};
