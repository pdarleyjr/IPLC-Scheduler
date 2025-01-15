const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Therapist routes
app.get('/therapists', async (req, res) => {
  const therapists = await prisma.therapist.findMany({
    include: {
      clients: true,
      services: true,
      appointments: {
        include: {
          client: true,
          service: true
        }
      }
    }
  });
  res.json(therapists);
});

app.post('/therapists', async (req, res) => {
  const { name, email, phone } = req.body;
  const therapist = await prisma.therapist.create({
    data: { name, email, phone }
  });
  res.json(therapist);
});

// Client routes
app.get('/clients', async (req, res) => {
  const clients = await prisma.client.findMany({
    include: {
      therapist: true,
      appointments: {
        include: {
          service: true,
          therapist: true
        }
      }
    }
  });
  res.json(clients);
});

app.post('/clients', async (req, res) => {
  const { name, email, phone, therapistId } = req.body;
  const client = await prisma.client.create({
    data: { name, email, phone, therapistId }
  });
  res.json(client);
});

// Service routes
app.get('/services', async (req, res) => {
  const services = await prisma.service.findMany();
  res.json(services);
});

app.post('/services', async (req, res) => {
  const { name, duration, price, therapistId } = req.body;
  const service = await prisma.service.create({
    data: { name, duration, price, therapistId }
  });
  res.json(service);
});

// Appointment routes
app.get('/appointments', async (req, res) => {
  const appointments = await prisma.appointment.findMany({
    include: {
      client: true,
      service: true,
      therapist: true
    }
  });
  res.json(appointments);
});

app.post('/appointments', async (req, res) => {
  const { date, duration, clientId, serviceId, therapistId } = req.body;
  const appointment = await prisma.appointment.create({
    data: { date, duration, clientId, serviceId, therapistId }
  });
  res.json(appointment);
});

app.post('/appointments/recurring', async (req, res) => {
  const { date, duration, clientId, serviceId, therapistId, recurrence } = req.body;
  const recurringEvents = [];
  for (let i = 0; i < recurrence; i++) {
    recurringEvents.push({
      date: new Date(new Date(date).setDate(new Date(date).getDate() + i * 7)),
      duration,
      clientId,
      serviceId,
      therapistId
    });
  }
  const result = await prisma.appointment.createMany({ data: recurringEvents });
  res.json(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
