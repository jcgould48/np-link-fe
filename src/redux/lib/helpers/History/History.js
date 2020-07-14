import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const History = (location) => {
  return history.push(location);
};
