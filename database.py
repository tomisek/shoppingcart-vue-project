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

async def deleteItemById(id):
    return await db.run('DELETE FROM items WHERE id = :id', {"id": id})


