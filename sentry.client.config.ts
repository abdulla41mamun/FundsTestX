// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8505bb3b9a0f44a245cda25e8394beb2@o4507899473494016.ingest.de.sentry.io/4507899486732368",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});