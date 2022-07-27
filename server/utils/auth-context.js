import { createContext } from 'react';

export default createContext({
    token: null,
    id: null,
    login: (token, id) => { },
    logout: () => { },
});