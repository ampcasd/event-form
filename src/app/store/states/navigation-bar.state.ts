import { State, Action, StateContext, Selector } from '@ngxs/store';

import { NavigationBarUpdate } from '../actions/navigation-bar-update.action';

export class NavigationBarStateModel {
  header: string;
  links: string[];
}

@State<NavigationBarStateModel>({
  name: 'navigationBar',
  defaults: {
    header: 'Hotree',
    links: []
  }
})
export class NavigationBarState {

  @Action(NavigationBarUpdate)
  add({ getState, patchState }: StateContext<NavigationBarStateModel>, { header, links }: NavigationBarUpdate) {

    patchState({
      header,
      links
    });
  }
}
