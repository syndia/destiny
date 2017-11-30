/**
 * External dependencies
 */
import { combineReducers } from 'redux'

/**
 * Internal dependencies
 */
import oauth from './oauth/reducer'
import user from './user/reducer'

const reducers = combineReducers({ oauth, user })

export default reducers
