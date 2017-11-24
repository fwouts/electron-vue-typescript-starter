import * as Vuex from "vuex";

import Counter, { CounterState } from "./modules/Counter";

import Vue from "vue";

Vue.use(Vuex);

export interface State {
  Counter: CounterState;
}

export default new Vuex.Store<State>({
  modules: {
    Counter
  },
  strict: process.env.NODE_ENV !== "production"
});
