import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data: {
      title: "ok cutie",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  })
}

main()
