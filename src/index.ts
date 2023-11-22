import {default as Keycloak} from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'url',
  realm: 'realm',
  clientId: 'clientId'
});

export default keycloak;
