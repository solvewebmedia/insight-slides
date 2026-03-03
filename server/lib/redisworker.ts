import { Worker } from 'bullmq';

const worker = new Worker('audit', async job => {
  const { url } = job.data;

  // Call PageSpeed
  // Call other APIs
  // Save results in DB

}, {
  connection: { host: 'localhost', port: 6379 }
});