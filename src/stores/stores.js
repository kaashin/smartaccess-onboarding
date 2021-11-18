import { writable } from "svelte/store";

export const onboardState = writable(0);
export const appState = writable("onboard");
