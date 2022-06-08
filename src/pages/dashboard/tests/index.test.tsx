import { cleanup } from '@testing-library/react';
import { renderWithIntl } from '../../../helpers/testing-helpers';
import DashboardPage, { DashboardPageProps } from '..';
afterEach(cleanup);

describe('Pokemon DashboardPage', () => {
  let props: DashboardPageProps;
  beforeEach(() => {
    props = {
    };
 
  });
  describe('render', () => {
    it('should render correctly', () => {
      const { asFragment } = renderWithIntl(<DashboardPage {...props} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
