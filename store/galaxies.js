export const state = () => ({
  galaxies: [],
  enableSort: true
})

export const mutations = {
  setGalaxies(state, galaxies) {
    state.galaxies = galaxies
  },
  sortGalaxies(state) {
    if (state.enableSort) {
      state.galaxies.sort((a, b) => a.name.localeCompare(b.name))
      state.enableSort = false
    } else {
      state.galaxies.sort((b, a) => a.name.localeCompare(b.name))
      state.enableSort = true
    }

  }
}

export const actions = {
  async fetch({commit}) {
    const galaxies = await this.$axios.$get('https://test-frontend-api.herokuapp.com/galaxies')
    commit('setGalaxies', galaxies)
  },
  sortGalaxies({commit}) {
    commit('sortGalaxies')
  }
}

export const getters = {
  galaxies: s => s.galaxies,
  enableSort: s => s.enableSort
}
