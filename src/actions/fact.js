import * as request from 'superagent'

export const FACT_LOADED_SUCCESS = 'FACT_LOADED_SUCCESS'

const factLoadedSuccess = (data) => ({
  type: FACT_LOADED_SUCCESS,
  payload: data
})

export const loadFact = (category) => (dispatch) => {
  request
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(result => dispatch(factLoadedSuccess(result.body)))
    .catch(err => console.error(err))
}