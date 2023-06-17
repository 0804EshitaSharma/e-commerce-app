export const addFilter = (filter) => {
    return {
        type: 'ADD_ITEM',
        payload: filter
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}

export const removeFilter = (filter) => {
    return {
        type: 'REMOVE_ITEM',
        payload: filter
    }
}