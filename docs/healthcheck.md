## 🩺 Health Check

A health check endpoint exists on `/healthcheck`.  If healthy, it will return with a `200` and the following response:

```json
{
  "status": "ok"
}
```

To skip express from logging these calls, add the environment variable:

```bash
SKIP_HEALTH_CHECK_LOGS=true
``` 