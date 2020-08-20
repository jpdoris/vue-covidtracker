import Vue from 'vue';

export const EventBus = new Vue();

window.addEventListener(
  'keydown',
  (event): void => {
    EventBus.$emit('key-got-pressed', event);
  }
);
