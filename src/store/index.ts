import { createStore, Store } from "vuex";

export interface RootState {
    count: number;
}

export enum RootActions {
    increment = "increment",
}

export enum RootMutations {
    increment = "increment",
}

const initialRootState: RootState = {
    count: 0,
};

export const rootStore: Store<RootState> = createStore({
    // Only enable strict mode during development to improve performance
    strict: import.meta.env.MODE === "development",
    state: initialRootState,

    getters: {
        count: (state: RootState): number => state.count,
    },

    mutations: {
        [RootMutations.increment]: (state: RootState) => {
            state.count += 1;
        },
    },

    actions: {
        [RootActions.increment]: (context) => {
            context.commit(RootMutations.increment);
        },
    },
});
