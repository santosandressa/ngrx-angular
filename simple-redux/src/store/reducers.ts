import * as fromActions from "./actions";

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: "Eat pizza", complete: false }],
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload; // this is the new todo
      const data = [...state.data, todo]; // this is a new array that contains the old data and the new todo
      return {
        ...state,
        data,
      }; // this is a new object that contains the old state and the new data
    }
    case fromActions.REMOVE_TODO: {
      const data = state.data.filter(
        (todo) => todo.label !== action.payload.label
      );

      return {
        ...state,
        data,
      };
    }
  }
  return state;
}
