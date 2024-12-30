# Serverless Application Deployment with Wrangler

## Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install Cloudflare Wrangler globally using npm:
  ```bash
  npm install -g wrangler
  ```
- Ensure your terminal's default shell is `zsh`. If not, update it using:
  ```bash
  chsh -s /bin/zsh
  ```

## Steps

### 1. Install Dependencies
Run the following command to install all necessary dependencies for your application:
```bash
npm i
```
**Output Example:**
```
up to date, audited 115 packages in 645ms

23 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### 2. Start Local Development Server
To run your application locally, execute:
```bash
npm run dev
```
**Output Example:**
```
> my-app@0.0.0 dev
> wrangler dev

⛅️ wrangler 3.99.0
-------------------

⎔ Starting local server...
[wrangler:inf] Ready on http://localhost:8787
```
Visit [http://localhost:8787](http://localhost:8787) to view your application.

### 3. Login to Cloudflare
Authenticate yourself with Cloudflare to manage and deploy applications:
```bash
npx wrangler login
```
**Output Example:**
```
Attempting to login via OAuth...
Successfully logged in.
```

### 4. Verify Login Status
Check your account information:
```bash
npx wrangler whoami
```
**Output Example:**
```
👋 You are logged in with an OAuth Token, associated with the email pratap.das@gmail.com.
┌────────────────────────────────────────┬──────────────────────────────────┐
│ Account Name                           │ Account ID                       │
├────────────────────────────────────────┼──────────────────────────────────┤
│ pratap.das@gmail.com's Account │ 1fb260d602665c0ede88c0a42d18eb │
└────────────────────────────────────────┴──────────────────────────────────┘
```

### 5. Deploy Your Application
To deploy your application to the Cloudflare Workers environment, run:
```bash
npm run deploy
```
**Output Example:**
```
> my-app@0.0.0 deploy
> wrangler deploy

⛅️ wrangler 3.99.0
-------------------

Total Upload: 25.82 KiB / gzip: 6.26 KiB
Worker Startup Time: 12 ms
Uploaded my-app (5.61 sec)
Deployed my-app triggers (3.10 sec)
  https://my-app.pratap-das.workers.dev
Current Version ID: 909fa949-daf8-4f49-94a5-7fd479cd0860
```
Your application is now live at the provided URL (e.g., `https://my-app.pratap-das.workers.dev`).

---

## Additional Notes
- For telemetry information collected by Cloudflare, refer to the [Cloudflare Workers documentation](https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md).
- To view funding details, use:
  ```bash
  npm fund
  ```

## Debugging
- If the local server doesn't start or deploy properly, use `wrangler tail` to monitor logs.
- Ensure you are using the latest version of `wrangler` by running:
  ```bash
  npm install -g wrangler@latest
  
