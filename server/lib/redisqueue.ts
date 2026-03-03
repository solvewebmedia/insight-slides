import { Queue } from 'bullmq';

const auditQueue = new Queue('audit', {
  connection: { host: 'localhost', port: 6379 }
});

export async function createAudit(url) {
  const job = await auditQueue.add('run-audit', { url });
  return job.id;
}