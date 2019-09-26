import item from '../../data'

export function getRoomBySlug(dispatch) {
    return (slug) => formatData(item).filter( (room) => room.slug === slug)[0]
}

export function loadRooms(dispatch){

    return () => {
        setTimeout(() => {
            dispatch({
                type: '@rooms/LOAD_ROOMS',
                payload: formatData(item)
            })
        } ,3000)        
    }    
}

export function loadFeaturedRooms(dispatch){

    return () => {
        setTimeout(() => {
            dispatch({
                type: '@rooms/LOAD_FEATURED_ROOMS',
                payload: formatData(item).filter( room => room.featured === true)
            })

        } ,1000)        
    }    
}

const getTypes = ((items = [],value = '') => {
    return [...new Set(items.map( item => item[value]))]
})

export function sortedRoomsFilter(dispatch){
    return (term = '', attribute, callback) => {
        setTimeout(() => {
            dispatch({
                type: '@rooms/SORTED_ROOMS_FILTER',
                payload: term ? callback(attribute, term) : formatData(item)
            })

            dispatch({
                type: '@rooms/GET_TYPES_ROOMS',
                payload:  getTypes(formatData(item),'type')
            })
            dispatch({
                type: '@rooms/GET_CAPACITY_ROOMS',
                payload:  getTypes(formatData(item),'capacity')
            })
        } ,1000)    
    }
}

function formatData(data = []){
    return data.map(item => {
        let id = item.sys.id
        let images = item.fields.images.map( image => image.fields.file.url)
        return {...item.fields,images, id}
    })
}