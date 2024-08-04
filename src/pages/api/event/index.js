import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export default async (req, res) => {
    if (req.method === "GET") {
        try {
            const events = await prisma.event.findMany();
            res.status(200).json(events);
        }
        catch(error){
            res.status(500).json({error: "Failed To Get Events"});

        }
        finally {
            await prisma.$disconnect();
        }
    }

    else if (req.method === "POST") {
        try {
            const {name, address} = req.body;
            const event = await prisma.event.create(
               {
                data: {name, address}
               }
            );
            res.status(201).json(event);
        }
        catch(error) {
            res.status(500).json({error: "Failed To Create Event"});
        }
        finally {
            await prisma.$disconnect();
        }
    }

    else {
        res.status(405).json({error: "Method Not Allowed"});
    }
}