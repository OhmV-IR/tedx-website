const { CosmosClient } = require("@azure/cosmos");
const endpoint = process.env.DB_ENDPOINT;
const key = process.env.DB_KEY;
const client = new CosmosClient({endpoint, key});
const { container } = await client.database(process.env.DB_ID).containers.createIfNotExists({id: process.env.CONTAINER_ID});
export async function POST(request){
    var email = request.nextUrl.searchParams.get('email');
    if(!email.match("[a-z0-9].*\@[a-z0-9].*\..*")){
        return new Response("Invalid email", {
            status: 400
        });
    }
    await container.items.create({email: email});
    return new Response("Email written", {
        status: 200
    });
}