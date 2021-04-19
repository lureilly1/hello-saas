/* eslint-disable */
import embed from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    url: 'qap.sebrae.com.br',
  //  webIntegrationId: '<Qlik web integration id>',
    appId: 'c73392a1-df41-425b-86dd-c14d45f8652f',
  });

  const n = embed(app);

  (await n.selections()).mount(document.querySelector('.toolbar'));

  // n.render({});
}

run();
