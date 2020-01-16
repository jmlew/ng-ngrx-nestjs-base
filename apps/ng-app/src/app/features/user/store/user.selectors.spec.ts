import { usersFeatureKey } from './index';
import * as fromSelectors from './user.selectors';

describe('Users Selectors', () => {
  it('should select the feature state', () => {
    const result = fromSelectors.selectUsersState({
      [usersFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
