import Paths from "constants/path";
import * as Pages from "pages";
export interface IRoute {
  path: Paths;
  exact: boolean;
  component: React.FC;
}

export const routes: IRoute[] = [
  {
    path: Paths.MAIN_PAGE,
    exact: true,
    component: Pages.MainPage,
  },
];
