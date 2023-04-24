import { api } from 'boot/axios'

// State : données du magasin
const state = {
  user: null,
  token: null
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  enregistrerUtilisateur ({ commit }, payload) {
    const that = this
    console.log('Payload', payload)
    api.post('/register', payload)
      .then(function (response) {
        commit('SET_USER', response.data.user)
        commit('SET_TOKEN', response.data.access_token)
        console.log('Utilisateur enregistré')
        console.log('Reponse.data', response.data)
        console.log('State', state)
        that.$router.push('/')
      })
      .catch(function (error) {
        console.log(error.response)
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace à notre objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
