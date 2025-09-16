import { action } from 'storybook/actions';

export const consoleDecorator = storyFn => {
  const originalLog = console.log;

  console.log = (...args) => {
    action('console.log')(args);
    originalLog.apply(console, args);
  };

  return storyFn();
};
