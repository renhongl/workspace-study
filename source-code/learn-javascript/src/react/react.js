export const createElement = (type, content, props) => {
  const parent = {
    type,
    content,
    props: {
      children: [],
      ...props,
    },
  };
  parent.props.children.forEach((item) => (item.parent = parent));
  return parent;
};

export const createNode = (Component) => {
  const ele = document.createElement(Component.type);
  ele.textContent = Component.content;
  ele.addEventListener('click', Component.props.onClick);
  return ele;
};

export const render = (Component, parent) => {
  // parent.innerHTML = '';

  if (Array.isArray(Component)) {
    for (let item of Component) {
      if (!item.router) {
        const ele = createNode(item);
        parent.appendChild(ele);
        if (item.props.children.length > 0) {
          render(item.props.children, ele);
        }
      }
    }
  } else {
    if (!Component.router) {
      const ele = createNode(Component);
      parent.appendChild(ele);
      if (Component.props.children.length > 0) {
        render(Component.props.children, ele);
      }
    }
  }
};
