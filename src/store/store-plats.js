// State : données du magasin
const state = {
  plats: [
    {
      id: 1,
      image: 'https://i.imgur.com/0umadnY.jpg',
      nom: 'Burger',
      description: "Un hamburger est un sandwich composé d'une ou plusieurs tranches de viande hachée, généralement du bœuf, placées dans un petit pain ou une brioche.",
      note: 4
    },
    {
      id: 2,
      image: 'https://i.imgur.com/b9zDbyb.jpg',
      nom: 'Pizza',
      description: "La pizza est un plat savoureux d'origine italienne, consistant en une base généralement ronde et aplatie de pâte levée à base de blé.",
      note: 5
    },
    {
      id: 3,
      image: 'https://i.imgur.com/RbKjUjB.jpg',
      nom: 'Petits choux',
      description:
        'Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiement pas bon...',
      note: 1
    },
    {
      id: 4,
      image: 'https://i.imgur.com/xAuhNVg.jpg',
      nom: 'BBQ Ribs',
      description: 'Les BBQ ribs ou barbecue ribs sont des grands classiques très appréciés partout dans le monde.',
      note: 5
    }
  ]
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  supprimerPlat (state, id) {
    // Filtre les données du tableau
    // et garde les plats dont l'id est différent de celui à supprimer
    state.plats = state.plats.filter(el => el.id !== id)
  },
  ajouterPlat (state, plat) {
    // Ajout du plat à fin du tableau
    state.plats.push(plat)
  },
  modifierPlat (state, payload) {
    // Recherche la tâche et retourne sa position dans le tableau, son index
    const index = state.plats.findIndex(el => el.id === payload.id)
    // Si une tâche a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.plats[index], payload.updates)
    }
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  // Supprime un plat
  supprimerPlat ({ commit }, id) {
    commit('supprimerPlat', id)
  },
  // Ajoute un plat
  ajouterPlat ({ commit }, plat) {
    let uId = 1
    // Si le tableau n'est pas vide
    if (state.plats.length) {
      // Récupère l'id du dernier élément du tableau
      uId = state.plats[state.plats.length - 1].id + 1
    }
    // Ajoute l'id au plat
    plat.id = uId
    // Ajoute le plat au magasin
    commit('ajouterPlat', plat)
  },
  // Modifie un plat
  modifierPlat ({ commit }, payload) {
    // Valide la mutation et y passe les données
    commit('modifierPlat', payload)
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  plats: (state) => {
    return state.plats
  }
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
