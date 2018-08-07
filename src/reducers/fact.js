import {FACT_LOADED_SUCCESS} from '../actions/fact'


export default function (state = {}, {type, payload}) {
	switch (type) {
		case FACT_LOADED_SUCCESS:
			return payload

		default:
      return state
	}
}
