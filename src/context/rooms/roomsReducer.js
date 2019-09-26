export default (state, action) => {
    switch(action.type){
        case '@rooms/LOAD_ROOMS':
            return {...state,rooms: action.payload, loading: false}
        case '@rooms/LOAD_FEATURED_ROOMS':
            return {...state,featuredRooms: action.payload, loading: false}
        case '@rooms/SORTED_ROOMS_FILTER':
            return {...state, sortedRooms: action.payload, loading: false}
        case '@rooms/GET_TYPES_ROOMS':
            return {...state,typesRooms: action.payload, loading: false}
        case '@rooms/GET_CAPACITY_ROOMS':
            return {...state, capacity: action.payload, loading: false}
        default:
            return state
    }
}