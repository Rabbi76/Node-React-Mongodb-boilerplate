const initialState = {
    allCanvas: [],
    one_canvas: {}
};

export default function canvas(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_CANVAS':
            return {
                ...state,
                allCanvas: action.payload.allCanvas
            }
            break
        case 'SELECT_CANVAS':
        console.log('reducer')
            return {
                ...state,
                one_canvas: action.payload.selected_canvas
            }
            break
        default:
            return state;
    }
}
