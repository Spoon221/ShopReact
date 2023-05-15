import React from 'react';

export function compareByHighPrice( a, b ) {
  if ( a.price < b.price ) {
    return -1;
  }
  if ( a.price > b.price ) {
    return 1;
  }
  return 0;
}

export function compareByLowPrice( a, b ) {
  if ( a.price < b.price ) {
    return 1;
  }
  if ( a.price > b.price ) {
    return -1;
  }
  return 0;
}

export function compareByRate( a, b ) {
  if ( a.rating.rate < b.rating.rate) {
    return 1;
  }
  if ( a.rating.rate > b.rating.rate ) {
    return -1;
  }
  return 0;
}

export function compareByAlfa( a, b ) {
  if ( a.title < b.title) {
    return -1;
  }
  if ( a.title > b.title) {
    return 1;
  }
  return 0;
}

export const LABELS = ['Сначала недорогие', 'Сначала дорогие', 'Сначала с наилучшей оценкой', 'По алфавиту'];

export const ITEMS = [
  {
    label: (
      <div>{LABELS[0]}</div>
    ),
    key: '0',
  },
  {
    label: (
      <div>{LABELS[1]}</div>
    ),
    key: '1',
  },
  {
    label: (
      <div>{LABELS[2]}</div>
    ),
    key: '2',
  },
  {
    label: (
      <div>{LABELS[3]}</div>
    ),
    key: '3',
  },
];
