import { cleanup, screen } from '@testing-library/react';
import { renderWithIntl } from '../../../../helpers/testing-helpers';
import ModalContent, { ModalContentProps } from '../ModalContent';
afterEach(cleanup);

describe('ModalContent', () => {
  let props: ModalContentProps;
  beforeEach(() => {
    props = {
    handleClose: jest.fn(),
    data: {
        name: 'fake-name',
        height:6,
        base_experience: 62,
        weight: 45,
        sprites: {
            front_default: 'fake-url',
            back_default: 'fake-url',
            front_shiny: 'fake-url'},
        types: [
            {
                slot:1,
                type: {name:'type1',url:'type2-url'}
            },
            {
                slot:2,
                type: {name:'type2',url:'type1-url'}
            }
        ],
        stats: [
            {
                base_stat: 1,
                effort: 'fake-effort',
                stat: {name:'type1',url:'type2-url'}
             }
        ]
    },
    isLoading: false,
    };
 
  });
  describe('render', () => {
    it('should render correctly', () => {
      const { asFragment } = renderWithIntl(<ModalContent {...props} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('title should display on the page', () => {
    renderWithIntl(<ModalContent {...props} />);
    const title = screen.getByTestId('poke-title');
    expect(title).toBeInTheDocument();
  });
});
