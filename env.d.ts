/// <reference types="vite/client" />

import 'vue-router';

export {};

declare module 'vue-router' {
  interface RouteMeta {
    header?: {
      transparentBackground?: boolean;
    };
  }
}
