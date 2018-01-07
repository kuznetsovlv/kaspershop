import React from 'react';
import {
  renderIntoDocument,
  isCompositeComponent,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-dom/test-utils';
import Switcher from './Switcher';

describe ('Tests for Switcher components', () => {
  it('Render with name only', () => {
    const onChange = jasmine.createSpy('onChange');

    const element = <Switcher name="test" onChange={onChange} />;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);

    const switchers = scryRenderedDOMComponentsWithClass(renderedComponent, 'switcher');

    expect(switchers.length).toBe(1);
    expect(onChange).toHaveBeenCalledTimes(0);

    const [switcher] = switchers;
    const input = switcher.getElementsByTagName('input')[0];
    const label = switcher.getElementsByTagName('label')[0];

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(true);

    Simulate.change(input);

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(1);

    Simulate.change(input);

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('Render initialy checked', () => {
    const onChange = jasmine.createSpy('onChange');

    const element = <Switcher name="test" checked onChange={onChange} />;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);

    const switchers = scryRenderedDOMComponentsWithClass(renderedComponent, 'switcher');

    expect(switchers.length).toBe(1);
    expect(onChange).toHaveBeenCalledTimes(0);

    const [switcher] = switchers;
    const input = switcher.getElementsByTagName('input')[0];
    const label = switcher.getElementsByTagName('label')[0];

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(true);

    Simulate.change(input);

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(1);

    Simulate.change(input);

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('Render disabled', () => {
    const onChange = jasmine.createSpy('onChange');

    const element = <Switcher name="test" disabled onChange={onChange} />;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);

    const switchers = scryRenderedDOMComponentsWithClass(renderedComponent, 'switcher');

    expect(switchers.length).toBe(1);
    expect(onChange).toHaveBeenCalledTimes(0);

    const [switcher] = switchers;
    const input = switcher.getElementsByTagName('input')[0];
    const label = switcher.getElementsByTagName('label')[0];

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(true);

    Simulate.change(input);

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(true);
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('Render checked and disabled', () => {
    const onChange = jasmine.createSpy('onChange');

    const element = <Switcher name="test" checked disabled onChange={onChange} />;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);

    const switchers = scryRenderedDOMComponentsWithClass(renderedComponent, 'switcher');

    expect(switchers.length).toBe(1);
    expect(onChange).toHaveBeenCalledTimes(0);

    const [switcher] = switchers;
    const input = switcher.getElementsByTagName('input')[0];
    const label = switcher.getElementsByTagName('label')[0];

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(true);

    Simulate.change(input);

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(true);
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('Render with className', () => {
    const onChange = jasmine.createSpy('onChange');

    const element = <Switcher name="test" onChange={onChange} className="class" />;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);

    const switchers = scryRenderedDOMComponentsWithClass(renderedComponent, 'switcher');
    const elementsWithClass = scryRenderedDOMComponentsWithClass(renderedComponent, 'class');

    expect(switchers.length).toBe(1);
    expect(elementsWithClass.length).toBe(1);
    expect(onChange).toHaveBeenCalledTimes(0);

    const [switcher] = switchers;
    const [elementWithClass] = elementsWithClass;

    expect(switcher === elementWithClass).toBe(true);

    const input = switcher.getElementsByTagName('input')[0];
    const label = switcher.getElementsByTagName('label')[0];

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(true);

    Simulate.change(input);

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(1);

    Simulate.change(input);

    expect(Array.prototype.indexOf.call(label.classList, 'switcher__label_animated') < 0).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
