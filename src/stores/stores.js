import { writable } from "svelte/store";

// Store to know which step of onboarding the client is on
export const onboardState = writable(0);

// Store to know which "screen" it should be on.
export const appState = writable("onboard");
