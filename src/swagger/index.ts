import * as yaml from 'yamljs';
const expressJSDocSwagger = require('express-jsdoc-swagger');

const swaggerPath = {
  json: '/swagger.json',
  yaml: '/swagger.yaml',
  ui: '/api-docs'
}

let swaggerYAML;

function getOptions(serviceConfigs, baseDir) {
  return {
    info: {
      description: '<Please edit your swagger document to add a description here.>',
      version: '1.0.0',
      title: serviceConfigs.appName,
      termsOfService: 'https://www.pwc.com/gx/en/legal-notices/terms-and-conditions.html',
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
      }
    },
    security: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization'
      }
    },
    servers: [
      {
        url: 'http://localhost:' + serviceConfigs.port,
        description: 'Local'
      },
      {
        url: 'https://webapp-mppm.dev.qd.pwcinternal.com',
        description: 'Dev'
      },
      {
        url: 'https://webapp-mppm.tst.qd.pwcinternal.com',
        description: 'Test'
      }
    ],
    baseDir: baseDir,
    filesPattern: './**/*.' + (serviceConfigs.envName === 'LOCAL' ? 'ts' : 'js'),
    swaggerUIPath: swaggerPath.ui,
    exposeSwaggerUI: true,
    exposeApiDocs: true,
    apiDocsPath: swaggerPath.json,
    swaggerUiOptions: {},
    externalDocs: {
      description: 'Find out more',
      url: 'http://swagger.io'
    }
  }

}

export const swaggerGenerator = (app, serviceConfigs, baseDir)=>{
  const instance = expressJSDocSwagger(app)(getOptions(serviceConfigs, baseDir));
  // after conversion is completed save swagger yaml locally
  instance.addListener('finish', (data) => {
    swaggerYAML = yaml.dump(data, 10)
  });
  app.get(swaggerPath.yaml, (req, res) => {
    res.set('Content-Type', 'text/yaml; charset=UTF-8');
    res.send(swaggerYAML);
  });
}