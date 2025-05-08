const dotenv = require('dotenv');
dotenv.config();
const { CosmosClient } = require("@azure/cosmos");
const endpoint = process.env.DBENDPOINT;
const key = process.env.DBKEY;
const client = new CosmosClient({endpoint, key});
const { container } = await client.database(process.env.DBID).containers.createIfNotExists({id: process.env.CONTAINERID});
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