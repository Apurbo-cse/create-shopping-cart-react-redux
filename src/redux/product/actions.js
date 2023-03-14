import { ADDED } from "./actionTypes"

export const added =(title) => {
    return {
        type: ADDED,
        payload: title
    }
}