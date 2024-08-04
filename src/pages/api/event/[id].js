import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export default async (req, res) => {
    const { id } = req.query;

    if (req.method === "GET") {
        try {
            const event = await prisma.event.findUnique({where: {id: parseInt(id)}});
            if (event) {
                res.status(200).json(event);
            }
            else {
                res.status(404).json({error: "Event Not Found"});
            }
        }
        catch (error) {
            res.status(500).json({error: "Failed to catch error"});
        }
        finally {
            await prisma.$disconnect();
        }
    }

    else if (req.method === "PUT") {
        const {name, address } = req.body;
        try {
            const event = await prisma.event.update({
                where: {id: parseInt(id)},
                data : {name, address}
            });
            res.status(200).json(event);
        }
        catch (error) {
           res.status(500).json({ error: "Failed To Update Event" });
        }
        finally {
           await prisma.$disconnect();
        }
    }
    
    else if (req.method === "DELETE") {
        try {
            await prisma.event.delete({where: {id: parseInt(id)}});
            res.status(204).end();
        }
        catch(error) {
            res.status(500).json({error: "Failed To Delete User"});
        }
        finally {
        await prisma.$disconnect();
        }
    }
    else {
        res.status(405).json({error: "Method Not Allowed"});
    }
}