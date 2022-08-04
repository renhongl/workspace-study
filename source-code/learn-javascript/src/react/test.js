import { Router, React } from '.';

export const testRouter = () => {
  Router.init();

  Router.setRoute('test', () => {
    console.log('test page');
  });
  Router.setRoute('example', () => {
    console.log('example page');
  });
  Router.setRoute('demo', () => {
    console.log('demo page');
  });

  Router.linkTo('test', () => {
    Router.linkTo('test');
  });

  setTimeout(() => {
    Router.linkTo('example');
  }, 3000);

  setTimeout(() => {
    Router.linkTo('demo');
  }, 6000);
};

export const testReact = () => {
  Router.init();

  const Section1Component = React.createElement('div', 'Section 1 Component', {
    onClick: () => {
      Router.linkTo('s1');
    },
  });
  const Section2Component = React.createElement('div', 'Section 2 Component', {
    onClick: () => {
      Router.linkTo('s2');
    },
  });
  const AppComponent = React.createElement('div', 'App Component', {
    onClick: () => {
      Router.linkTo('s1');
    },
    children: [Section1Component, Section2Component],
  });
  Router.setRoute('s1', Section1Component);
  Router.setRoute('s2', Section2Component);
  React.render(AppComponent, document.getElementById('app'));
};
