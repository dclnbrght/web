import * as dataAccessApi from './dataAccessApi.js';
import * as dataAccessLocal from './dataAccessLocal.js';

// Strategy pattern for data access

const componentMap = {
    dataAccessApi,
    dataAccessLocal
};

// Get a component based on a key, from a settings file
function create(componentKey) {
    const Component = componentMap[componentKey];
    if (Component) {
        return Component;
    } else {
        throw new Error('Component not found');
    }
}

const handleUnauthorized = () => {
    // Reload the page to trigger new authentication
    window.location.reload();
};

// Add error handling to fetch calls
const fetchWithAuth = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        if (response.status === 401) {
            handleUnauthorized();
            return null;
        }
        return response;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export {
    create
}