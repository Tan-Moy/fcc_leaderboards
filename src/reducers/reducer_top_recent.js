import { RECENT_TOP, ALL_TIME  } from '../actions/action_creator';

export default function(state = [], action) {
    switch (action.type) {
        case RECENT_TOP:
            return [action.payload.data, ...state ];

        case ALL_TIME:
            return [action.payload.data, ...state ];

        default:
            return state
    }
}


// export default function(state = { recent_top: [''] }, action) {
//     switch (action.type) {
//         case RECENT_TOP:
//             return [...state, action.payload.data];
//     }
//     return state
// }
