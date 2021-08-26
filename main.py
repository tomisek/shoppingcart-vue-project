from sanic import Sanic, response as res

app=Sanic(__name__)

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

if __name__ == "__main__":    
    app.run(port=8000)