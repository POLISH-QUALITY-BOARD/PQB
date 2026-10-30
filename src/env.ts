import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  PUBLIC_GTM_CONTAINER_ID: {
    public: true,
    schema: (value) => value ?? ''
  }
});
