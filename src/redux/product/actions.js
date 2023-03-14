import { ADDED } from "./actionTypes"

export const added =(title,category, image, qty) => {
    return {
        type: ADDED,
        payload: title,category, image, qty
    }
}