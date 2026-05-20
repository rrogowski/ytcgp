type ComponentProps<T extends keyof React.JSX.IntrinsicElements> =
  React.CSSProperties &
    Omit<
      React.JSX.IntrinsicElements[T],
      "color" | "content" | "height" | "translate" | "width"
    >;

const createComponent = <T extends keyof React.JSX.IntrinsicElements>(
  tag: T,
) => {
  const Component: React.FC<ComponentProps<T>> = (props) => {
    const { children, ...remainingProps } = props;
    const Element = tag as React.ElementType;
    return (
      <Element
        style={getStyleProps(remainingProps)}
        {...getHtmlProps(remainingProps)}
      >
        {children}
      </Element>
    );
  };
  return Component;
};

const getHtmlProps = (props: object) => {
  return Object.entries(props).reduce((accumulator, [key, value]) => {
    if (!isStyleProp(key)) {
      return { ...accumulator, [key]: value };
    }
    return accumulator;
  }, {});
};

const getStyleProps = (props: object) => {
  return Object.entries(props).reduce((accumulator, [key, value]) => {
    if (isStyleProp(key)) {
      return { ...accumulator, [key]: value };
    }
    return accumulator;
  }, {});
};

const isStyleProp = (key: string) => {
  return key in document.body.style && key !== "src";
};

export const ui = {
  button: createComponent("button"),
  div: createComponent("div"),
  img: createComponent("img"),
  span: createComponent("span"),
};
