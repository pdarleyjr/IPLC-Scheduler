const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clean existing data
  await prisma.appointment.deleteMany();
  await prisma.service.deleteMany();
  await prisma.client.deleteMany();
  await prisma.therapist.deleteMany();

  // Add therapists
  const therapists = [
    { name: 'Maggy Del Valle', email: 'Bammservices@yahoo.com', phone: '786-622-2353', title: 'Occupational Therapist' },
    { name: 'Gianna Esposito', email: 'giannaiesposito@gmail.com', phone: '786-622-2353', title: 'Speech Language Pathologist Assistant' },
    { name: 'Isabel Guerra', email: 'iguerra.ots@gmail.com', phone: '786-622-2353', title: 'Occupational Therapist' },
    { name: 'Nancy Beato', email: 'Nancyc731@icloud.com', phone: '786-622-2353', title: 'COTA' },
    { name: 'Isabelle Areces', email: 'IsaAreces1@gmail.com', phone: '786-622-2353', title: 'Speech Language Pathologist Assistant' },
    { name: 'Karina De La Rosa', email: 'Karinadelarosa914@gmail.com', phone: '786-622-2353', title: 'Speech Language Pathologist' },
    { name: 'Alissa M Darley', email: 'adarley23@gmail.com', phone: '786-622-2353', title: 'Speech Language Pathologist / Director' },
    { name: 'Jessica Dehombre', email: 'j_dehombre@aol.com', phone: '786-622-2353', title: 'Speech Language Pathologist / Director' },
    { name: 'Sophia Fernandez', email: 'sofia4fernandez@gmail.com', phone: '786-622-2353', title: 'Speech Language Pathologist / Lead' },
    { name: 'Mariana Loys', email: 'm.loysslp@gmail.com', phone: '786-622-2353', title: 'Speech Language Pathologist' }
  ];

  for (const therapist of therapists) {
    await prisma.therapist.upsert({
      where: { email: therapist.email },
      update: therapist,
      create: therapist
    });
  }

  // Add services
  const services = [
    { name: 'Phone Consultation', duration: 30, price: 0 },
    { name: 'Zoom', duration: 30, price: 0 },
    { name: 'Meeting with Directors', duration: 60, price: 0 },
    { name: 'Initial Interview', duration: 45, price: 0 },
    { name: 'Graduate Student: Individual Speech-Language Treatment', duration: 30, price: 0 },
    { name: 'Phone Consultation with Directors', duration: 30, price: 0 },
    { name: 'Phone Consultations for Evaluations', duration: 30, price: 0 },
    { name: 'Screening at School', duration: 30, price: 0 },
    { name: 'Screening with Consult', duration: 45, price: 0 },
    { name: 'Meeting', duration: 60, price: 0 },
    { name: 'Specialized Program', duration: 120, price: 0 },
    { name: 'Re-Evaluation (Within Session)', duration: 30, price: 75 },
    { name: 'Speech Evaluation', duration: 60, price: 200 },
    { name: 'Comprehensive Evaluation (2 Part)', duration: 60, price: 250 },
    { name: 'Evaluation', duration: 90, price: 350 },
    { name: 'Occupational Therapy Evaluation', duration: 60, price: 350 },
    { name: 'Individual Occupational Therapy Treatment (Office and School)', duration: 60, price: 150 },
    { name: 'Reading Intervention', duration: 60, price: 90 },
    { name: 'Individual Speech-Language Treatment', duration: 60, price: 150 },
    { name: 'Virtual Session', duration: 30, price: 75 }
  ];

  // Get first therapist to assign services to
  const firstTherapist = await prisma.therapist.findFirst();
  
  if (!firstTherapist) {
    throw new Error('No therapists found to assign services to');
  }

  for (const service of services) {
    await prisma.service.create({
      data: {
        ...service,
        therapist: {
          connect: { id: firstTherapist.id }
        }
      }
    });
  }

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
