import { getIdFromUrl } from "../utils";

describe('Test getIdFromUrl', () => {
    it('should return last item from url', () => {
      expect(
        getIdFromUrl('http//test.com/test/test/test/1'),
      ).toEqual(1);
    });
});