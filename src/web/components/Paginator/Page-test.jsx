import React from 'react';
import {
  renderIntoDocument,
  isCompositeComponent,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-dom/test-utils';
import Page from './Page';

describe('Tests for Page component', () => {
  it('Simple render', () => {
    const onClick = jasmine.createSpy('onClick');

    const element = <Page id="1" onClick={onClick}>1</Page>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('1');
    expect(onClick).toHaveBeenCalledTimes(0);

    Simulate.click(root);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Render disabled', () => {
    const onClick = jasmine.createSpy('onClick');

    const element = <Page id="1" onClick={onClick} disabled>1</Page>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('1');
    expect(onClick).toHaveBeenCalledTimes(0);

    Simulate.click(root);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('Render with class', () => {
    const onClick = jasmine.createSpy('onClick');

    const element = <Page id="1" onClick={onClick} className="class">1</Page>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');
    const classes = scryRenderedDOMComponentsWithClass(renderedComponent, 'class');

    expect(divs.length).toBe(1);
    expect(classes.length).toBe(1);

    const [root] = divs;
    const [elementWithClass] = classes;

    expect(root.textContent).toBe('1');
    expect(root === elementWithClass).toBe(true);
    expect(onClick).toHaveBeenCalledTimes(0);

    Simulate.click(root);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Render disabled with class', () => {
    const onClick = jasmine.createSpy('onClick');

    const element = <Page id="1" onClick={onClick} className="class" disabled>1</Page>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');
    const classes = scryRenderedDOMComponentsWithClass(renderedComponent, 'class');

    expect(divs.length).toBe(1);
    expect(classes.length).toBe(1);

    const [root] = divs;
    const [elementWithClass] = classes;

    expect(root.textContent).toBe('1');
    expect(root === elementWithClass).toBe(true);
    expect(onClick).toHaveBeenCalledTimes(0);

    Simulate.click(root);

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
