import { createStore } from 'vuex'

const vuexHome = {
  namespaced: true,
  state: {
    page: "vuex home variable",
    num: 1,
  },
  getters: {
    state: state => {
      return state;
    }
  },
  mutations: {
    setState: (state, { variable, value }) => state[variable] = value
  },
  actions: {
    action: ({ commit }, { action, payload }) => {
      return new Promise(resolve => {
        commit(action, payload);
        resolve();
      })
    }
  }
};

const vuexList = {
  namespaced: true,
  state: {
    list: [
      { fname: 'john', lname: 'doe', id: Math.random().toString(36).substring(7) },
      { fname: 'jane', lname: 'dane', id: Math.random().toString(36).substring(7) },
      { fname: 'adam', lname: 'smith', id: Math.random().toString(36).substring(7) },
    ]
  },
  getters: {
    state: state => {
      return state;
    }
  },
  mutations: {
    addList: (state, payload) => {
      let newList = [...state.list, payload];
      state.list = newList;
    },
    deleteList: (state, payload) => {
      let newList = [];

      state.list.forEach(x => {
        if (x.id !== payload) newList.push(x);
      });

      state.list = newList;
    }
  },
  actions: {
    action: ({ commit }, { action, payload }) => {
      return new Promise(resolve => {
        commit(action, payload);
        resolve();
      })
    }
  }
}

const vuexAccount = {
  namespaced: true,
  state: {
    fname: 'admin',
    lname: 'admin',
    gender: 'female',
    bday: '2000-01-01'
  },
  getters: {
    state: state => {
      return state;
    }
  },
  mutations: {
    setState: (state, { variable, value }) => state[variable] = value
  },
  actions: {
    action: ({ commit }, { action, payload }) => {
      return new Promise(resolve => {
        commit(action, payload);
        resolve();
      })
    }
  }
}

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home: vuexHome,
    list: vuexList,
    account: vuexAccount
  }
})
