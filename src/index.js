import { getUserName } from './utils/getUserName.js';
import { greeting } from './utils/greeting.js';

const fileManager = () => {
  const name = process.argv[2];
  const userName = getUserName(name);
  greeting(userName);
};

fileManager();
