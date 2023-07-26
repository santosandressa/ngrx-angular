import { createAction, createReducer, on } from '@ngrx/store';

export interface IAppState {
  counter: number;
}

export const INITIAL_STATE: IAppState = {
  counter: 1,
};

export const incrementa = createAction('[App] Aumenta contador');

export const decrementa = createAction('[App] Diminui contador');

export const appReducer = createReducer(
  INITIAL_STATE,
  on(incrementa, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  on(decrementa, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  })
);
