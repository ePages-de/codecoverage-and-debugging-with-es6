export default function reduxMiddleware () {
  return ({getState}) => (next) => (action) => {
    const state = getState() // eslint-disable-line no-unused-vars

    // do some stuff with state

    next(action)
  }
}
