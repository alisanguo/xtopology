const state = () => ({
  error: {
    text: ''
  }
})

const mutations = {
  error(state, error) {
    state.error = error
  }
}

export default {
  //namespaced: true,
  state,
  mutations
}
