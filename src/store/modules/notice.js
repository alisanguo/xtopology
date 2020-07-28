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


   // "topology-activity-diagram": "0.0.6",
    // "topology-chart-diagram": "0.0.3",
    // "topology-class-diagram": "0.0.4",
    // "topology-core": "^0.2.15",
    // "topology-flow-diagram": "0.0.3",
    // "topology-sequence-diagram": "0.0.6",