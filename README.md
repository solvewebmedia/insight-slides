HTTP Request
    ↓
handlers.ts (validates, creates audit record)
    ↓
services/audit/index.ts (orchestrator: enqueues tasks to Redis)
    ↓
Redis Queue
    ↓
workers/audit-queue-processor.ts (pulls jobs from queue, routes to correct task)
    ↓
workers/tasks/pagespeed-task.ts (executes the task)
    ↓
calls → services/audit/pagespeed.ts (business logic)
    ↓
calls → services/external-apis/pagespeed-client.ts (talks to Google API)