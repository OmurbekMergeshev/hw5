import { types } from "../types"



export  const setValue = (value) => {
   return {
      type: types.ADD_VALUE,
      payload: value
   }
}

export  const addNumberActions = (value) => {
   return {
      type: types.NUMBER_LIST,
      payload: value
   }
}

export const deleteAllNumbersActions = () => {
   return {
      type: types.DELETE
   }
}
