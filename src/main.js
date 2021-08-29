import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

const app = createApp(App);
Sentry.init({
  app,
  dsn:
    "https://4409f08d03d64e1b85130de62489b85c@o981342.ingest.sentry.io/5935874",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(router);

app.mount("#app");
