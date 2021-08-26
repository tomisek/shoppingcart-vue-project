from databases import Database

db=Database('sqlite:items-db.db')

async def get(query, values={}):
    rows = await db.fetch_all(query=query, values=values)
    dicts = []
    for row in rows:
        dicts.append(dict(row))
    return dicts

async def run(query, values={}):
    return await db.execute(query=query, values=values)


async def getItems():
    return await get('SELECT * FROM items')

async def getCartItems():
    return await get('SELECT * FROM cart')

async def addNewItem(cartItem):
    query = 'INSERT INTO cart(id, product_url, product_name, product_category, retail_price, product_quantity)VALUES(:id, :product_url, :product_name, :product_category, :retail_price, :product_quantity)'
    return await run(query, {
        "id": cartItem['id'],
        "product_url" : cartItem['productUrl'],
        "product_name" : cartItem['productName'],
        "product_category" : cartItem['productCategory'],
        "retail_price" : cartItem['retailPrice'],
        "product_quantity" : cartItem['quantity']

    })
    

async def deleteItemById(id):
    return await db.run('DELETE FROM items WHERE id = :id', {"id": id})




