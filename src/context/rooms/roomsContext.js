import createDataContext from '../createDataContext'
import reducerRooms from './roomsReducer'
import * as Actions from './roomsActions'


const INITIAL_STATE = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    typesRooms: [],
    capacity: [],
    searchQuery: {
        type: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfest: false,
        pets: false 
    }
}

export const {Provider, Context} = createDataContext(
    reducerRooms,
    {...Actions},
    INITIAL_STATE
)