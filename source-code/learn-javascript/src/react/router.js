import * as React from './react';

let routes = {};

export const hashChange = (e) => {
  const hash = location.hash;
  console.log(routes[hash]);
  if (routes[hash] && routes[hash].parent) {
    React.render(routes[hash], React.createNode(routes[hash].parent));
  }
};

export const setRoute = (path, Component) => {
  Component.router = true;
  routes['#' + path] = Component;
};

export const linkTo = (path) => {
  window.location.hash = path;
};

export const init = () => {
  window.addEventListener('hashchange', hashChange, false);
};
