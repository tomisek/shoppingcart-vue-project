from sanic import Sanic, response as res

app=Sanic(__name__)

@app.get('/rest/items')
async def get_item(req):
    from database import getItems
    return res.json(await getItems())


if __name__ == "__main__":    
    app.run(port=8000)