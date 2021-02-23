//import { helper as h } from '../../helper/helper'

// Using export keyword
var o = { bar: 'bar', baz: 'baz' };

export default function test() {
  return 'test';
}

export function bar() {
  return o.bar;
}

export function baz() {
  return o.bar;
}

export * from './es6_pattern_export.js'

