const { CosmosClient } = require("@azure/cosmos");
const sqlstring = require('sqlstring');
const endpoint = process.env.DB_ENDPOINT;
const key = process.env.DB_KEY;
const client = new CosmosClient({ endpoint, key });
const { container } = await client.database(process.env.DB_ID).containers.createIfNotExists({ id: process.env.CONTAINER_ID });
export async function POST(request) {
    var email = request.nextUrl.searchParams.get('email');
    if (!email.match("[a-z0-9].*\@[a-z0-9].*\..*")) {
        return new Response("Invalid email", {
            status: 400
        });
    }
    var dbResponse = await container.items.query(sqlstring.format("SELECT * from c where c.email=?", [email])).fetchAll();
    if (dbResponse.resources.length > 0) {
        container.item(dbResponse.resources[0].id).delete();
    }
    else{
        return new Response("Invalid email", {
            status: 400
        });
    }
    return new Response("Unsubscribed", {
        status: 200
    });
}