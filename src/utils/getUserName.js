import { DEFAULT_USER_NAME } from '../const/DEFAULT_USER_NAME.js';

export const getUserName = (name) => {
  if (!name) {
    return DEFAULT_USER_NAME;
  }
  return name.split('=')[1];
};
