import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: "kartik200421@gmail.com",
      name: "kartik",
    },
  })
}

main()
