from sanic import Sanic, response as res
from sanic.exceptions import NotFound
from sanic.response import text


app=Sanic(__name__)

@app.route('/put')
async def put_handler(req, methods=['PUT']):
    return text('PUT request - {}'.format(req.json))


@app.get('/rest/items')
async def get_item(req):
    from database import getItems
    return res.json(await getItems())

@app.get('/rest/cart')
async def get_cartItems(req):
    from database import getCartItems
    return res.json(await getCartItems())

@app.post('/rest/cart')
async def post_item(req):
    from database import addNewItem
    cartItem = req.json
    cartItem = await addNewItem(cartItem)
    return res.json(cartItem)

@app.delete('/rest/cart')
async def delete_all_cart_items(req):
    from database import deleteAllCartItems
    await deleteAllCartItems()
    return res.text('DELETE OK')

@app.get('/rest/cart/<id:int>')
async def getAnCartById(req, id):       
    from database import getCartById
    return res.json(await getCartById(id))

@app.delete('/rest/cart/<id:int>')
async def delete_cart_item_by_id(req, id):
    from database import deleteCartItemById
    await deleteCartItemById(id)
    return res.text('DELETE OK')

@app.put('/rest/cart/<id:int>')
async def update_cart_item_down(req, id):
    from database import downgradeCartItemQuantity
    await downgradeCartItemQuantity(id)
    return res.text('UPDATE OK OK')
    return res.json(await update_cart_item_down(id))

@app.patch('/rest/cart/<id:int>')
async def update_cart_item_up(req, id):
    from database import updateCartItemQuantity
    await updateCartItemQuantity(id)
    return res.text('UPDATE OK')
    return res.json(await update_cart_item_up(id))


if __name__ == "__main__":    
    app.run(port=8000)