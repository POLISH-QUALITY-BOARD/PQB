import { expect, test } from './../test';

const PORTAL_URL = 'https://pqb-partnerzy-7yztd6xakq-lm.a.run.app/';

test('/partnerzy redirects to the partner portal', async ({ request }) => {
  const response = await request.get('/partnerzy');

  expect(response.status()).toBe(200);

  const html = await response.text();

  expect(html).toContain(`<meta http-equiv="refresh" content="0; url=${PORTAL_URL}" />`);
  expect(html).toContain(`location.replace('${PORTAL_URL}')`);
  expect(html).toContain('<meta name="robots" content="noindex" />');
});
