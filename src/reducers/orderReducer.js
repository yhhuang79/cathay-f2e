export default (state = {}, action) => {
  switch (action.type) {
   case 'FETCH_ORDERS':
    return {
     orders: action.payload
    }
   default:
    return state
  }
 }