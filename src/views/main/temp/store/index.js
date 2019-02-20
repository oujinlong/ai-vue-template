/**
 * Created by oujinlong on 2019/2/19.
 */
import storage from '../../../../libraries/utils/storage'
/**
 * Initial state
 * @type {Object}
 */
const state = {
  data: storage.get('data') ? JSON.parse(storage.get('data')) : {}
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  proofInfo: state => state.proofInfo
}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {
  SET_PROOF_INFO (state, data) {
    state.data = data
    storage.set('data', JSON.stringify(data))
  }
}

/**
 * Actions
 * @type {Object}
 */
const actions = {

}

// Export module
export default { state, getters, mutations, actions }
