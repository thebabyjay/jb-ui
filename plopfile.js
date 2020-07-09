module.exports = plop => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of component',
      },
      {
        type: 'input',
        name: 'camelCaseName',
        message: 'Name of component in camelCase',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}/{{name}}.js',
        templateFile: './config/plop-templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/{{name}}.scss',
        templateFile: './config/plop-templates/component/styles.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/{{name}}.fixture.js',
        templateFile: './config/plop-templates/component/fixture.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/{{name}}.test.js',
        templateFile: './config/plop-templates/component/test.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}/index.js',
        templateFile: './config/plop-templates/component/index.hbs',
      },
    ],
  });
};
