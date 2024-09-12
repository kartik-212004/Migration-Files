import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  let data = await prisma.user.findMany({})
  console.log(data)
}
main()
