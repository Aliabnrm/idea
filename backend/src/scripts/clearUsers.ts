import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.deleteMany();
  console.log(`✅ ${result.count} users deleted successfully.`);
}

main()
  .catch((e) => {
    console.error("❌ Error while clearing users:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
