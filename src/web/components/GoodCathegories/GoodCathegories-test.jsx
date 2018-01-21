import React, { Component } from 'react';
import {
  renderIntoDocument,
  isCompositeComponent,
  isElement,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag
} from 'react-dom/test-utils';
import { GoodCathegories } from './GoodCathegories';

class WrappedGoodCathegories extends Component {

  render () {

    return <GoodCathegories {...this.props} />;
  }
};

const cathegoryList = {
  "1": {
    "id": 1,
    "value": "Продукты питания"
  },
  "2": {
    "id": 2,
    "value": "Бытовая химия"
  },
  "4": {
    "id": 4,
    "value": "Лекарства"
  },
  "8": {
    "id": 8,
    "value": "Товары первой необходимости"
  },
  "-1": {
    "id": -1,
    "value": "Все"
  }
};

const cathegories = [-1, 1, 2, 4, 8];

describe('Tests for GoodCathegories component', () => {
  it('Simple render', () => {
    const element = <WrappedGoodCathegories>1</WrappedGoodCathegories>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);
    

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('');
  });

  it('Should render empty', () => {
    const element = <WrappedGoodCathegories cathegories={cathegories} cathegoryList={cathegoryList}>{0}</WrappedGoodCathegories>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);
    

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('');
  });

  it('Should render "Продукты питания"', () => {
    const element = <WrappedGoodCathegories cathegories={cathegories} cathegoryList={cathegoryList}>{1}</WrappedGoodCathegories>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);
    

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('Продукты питания');
  });

  it('Should render "Лекарства"', () => {
    const element = <WrappedGoodCathegories cathegories={cathegories} cathegoryList={cathegoryList}>{4}</WrappedGoodCathegories>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);
    

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('Лекарства');
  });

  it('Should render "Бытовая химия, Лекарства"', () => {
    const element = <WrappedGoodCathegories cathegories={cathegories} cathegoryList={cathegoryList}>{6}</WrappedGoodCathegories>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);
    

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('Бытовая химия, Лекарства');
  });

  it('Should render "Продукты питания, Бытовая химия, Лекарства, Товары первой необходимости"', () => {
    const element = <WrappedGoodCathegories cathegories={cathegories} cathegoryList={cathegoryList}>{-1}</WrappedGoodCathegories>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);
    

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('Продукты питания, Бытовая химия, Лекарства, Товары первой необходимости');
  });

  it('Should convert children and render "Бытовая химия, Лекарства"', () => {
    const element = <WrappedGoodCathegories cathegories={cathegories} cathegoryList={cathegoryList}>6</WrappedGoodCathegories>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);
    

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('Бытовая химия, Лекарства');
  });

  it('Should convert children and render empty', () => {
    const element = <WrappedGoodCathegories cathegories={cathegories} cathegoryList={cathegoryList}>No data</WrappedGoodCathegories>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);
    

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');

    expect(divs.length).toBe(1);

    const [root] = divs;

    expect(root.textContent).toBe('');
  });

  it('Should render "Продукты питания" with class', () => {
    const element = <WrappedGoodCathegories
      cathegories={cathegories}
      cathegoryList={cathegoryList}
      className="class"
    >
      {1}
    </WrappedGoodCathegories>;

    const renderedComponent = renderIntoDocument(element);

    expect(isCompositeComponent(renderedComponent)).toBe(true);
    

    const divs = scryRenderedDOMComponentsWithTag(renderedComponent, 'div');
    const classes = scryRenderedDOMComponentsWithClass(renderedComponent, 'class');

    expect(divs.length).toBe(1);
    expect(classes.length).toBe(1);

    const [root] = divs;
    const [elementWithClass] = classes;

    expect(root === elementWithClass).toBe(true);

    expect(root.textContent).toBe('Продукты питания');
  });
});
