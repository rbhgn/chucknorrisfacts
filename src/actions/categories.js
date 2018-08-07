import * as request from 'superagent'

export const CATEGORIES_LOADED_SUCCES = 'CATEGORIES_LOADED_SUCCES'

const categoriesLoadedSuccess = (data) => ({
  type: CATEGORIES_LOADED_SUCCES,
  payload: data
})

export const getCategories = () => (dispatch) => {
  request
    .get(`https://api.chucknorris.io/jokes/categories`)
    .then(result => dispatch(categoriesLoadedSuccess(result.body)))
    .catch(err => console.error(err))
}


