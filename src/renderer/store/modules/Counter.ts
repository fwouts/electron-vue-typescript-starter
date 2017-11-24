import { ActionContext } from "vuex";
import { State } from "../index";

export interface CounterState {
  main: number;
}

const state: CounterState = {
  main: 0
};

const mutations = {
  DECREMENT_MAIN_COUNTER(state: CounterState) {
    state.main--;
  },
  INCREMENT_MAIN_COUNTER(state: CounterState) {
    state.main++;
  }
};

const actions = {
  someAsyncTask(actionContext: ActionContext<CounterState, State>) {
    // do something async
    actionContext.commit("INCREMENT_MAIN_COUNTER");
  }
};

export default {
  state,
  mutations,
  actions
};
