/**
 * Created by oujinlong on 2017/12/15.
 */
import storage from '../../../../libraries/utils/storage'
/**
 * Initial state
 * @type {Object}
 */
const state = {
  proofInfo: storage.get('proofInfo') ? JSON.parse(storage.get('proofInfo')) : {}
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
  SET_PROOF_INFO (state, proofInfo) {
    state.proofInfo = proofInfo
    storage.set('proofInfo',JSON.stringify(proofInfo))
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
