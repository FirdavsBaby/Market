let cart = { items: []}
let count = 1
function cartReducer(state = cart, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            let newItem = {
                ...state,
                items: [
                    ...state.items,
                    {title: action.payload.title , id: crypto.randomUUID(), price: action.payload.price, brand: action.payload.brand, count: count}
                ]
            }
            console.log(cart);
            return newItem
        }
            
    
        default:
            return state
    }
}
export default cartReducer