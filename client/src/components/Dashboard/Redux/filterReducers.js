const checkedFilters  = {
    list: []
}

const filterReducer = (state = checkedFilters, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { // returning a copy of orignal state 
                ...state, //spreading the original state
                // list: state.list.map((filter) => 
                //     (filter.category = filter.name === action.payload.category ? [...filter.category, action.payload.value] : filter.category,
                //         console.log(filter))) ,
                list: [...state.list, action.payload.value] // new todos array
              }; //add to list
        case 'CLEAR':
            return {
              list: []
            };
        case 'REMOVE_ITEM':
            return {
              ...state,
              list: state.list.filter(item => item !== action.payload.value)
            }
        default:
            return state;
    }
}

export default filterReducer;
