import { expect } from '@open-wc/testing';

import { ApiUser } from '../ApiUser.js';
import { stub, restore } from 'sinon';
import { responseDataUser } from '../../../../__mocks__/api-user/mock/dataUserMock.js';
import { RESPONSE_STATUS } from '../../../../__mocks__/_helper/responseStatus.js';
import { UserModel } from '../../models/UserModel.js';

describe('ApiUser', () => {
  let provider;

  beforeEach(() => {
    provider = new ApiUser();
  });

  afterEach(() => {
    restore();
  });

  describe('method getDataUser', () => {
    it('should fetch user data and return a UserModel instance', async () => {
      const fetchStub = stub(window, 'fetch').resolves(
        new Response(JSON.stringify(responseDataUser), {
          ...RESPONSE_STATUS.OK,
          headers: { 'Content-type': 'application/json' },
        }),
      );
      const userModel = await provider.getDataUser('1');

      expect(fetchStub.calledOnce).to.be.true;

      expect(userModel).to.be.instanceOf(UserModel);
      expect(userModel).to.have.property('id', '12345');
      expect(userModel).to.have.property('name', 'Hasna');
      expect(userModel).to.have.property('email', 'asd@asd.com');
      expect(userModel).to.have.property('typeUser', 'Viewer');
    });

    it('should throw an error if the fetch request fails', async () => {
      const fetchStub = stub(window, 'fetch').resolves(
        new Response(null, {
          ...RESPONSE_STATUS.BAD_REQUEST,
          statusText: 'Internal Server Error',
        }),
      );
      try {
        await provider.getDataUser('1');
        expect(true).to.be.false; // This line should not be reached
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
        expect(error.message).to.equal('Request failed');
      } finally {
        expect(fetchStub.calledOnce).to.be.true;
      }
    });
  });
});
