import {CATEGORIES_LOADED_SUCCES} from '../actions/categories'

export default function (state = [], {type, payload}) {
	switch (type) {
		case CATEGORIES_LOADED_SUCCES:
			return {
				error: payload
			}

		default:
      return state
	}
}
