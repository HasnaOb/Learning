import { expect } from '@open-wc/testing';

import { UserModel } from '../UserModel.js';

describe('UserModel', () => {
  it('should create an instance of UserModel with formatted properties', () => {
    const dataUser = {
      id: 1,
      name: 'jOhN dOe',
      email: 'TEST@TEST.COM',
      typeUser: '00',
    };
    const user = new UserModel(dataUser);

    expect(user).to.be.instanceOf(UserModel);

    expect(user.id).to.equal(1);
    expect(user.name).to.equal('John doe');
    expect(user.email).to.equal('test@test.com');
    expect(user.typeUser).to.equal('Administrator');
  });

  it('should assign "Unknown" to typeUser if typeUser code is not recognized', () => {
    const dataUser = {
      id: 2,
      name: 'alice',
      email: '<EMAIL>',
      typeUser: '10',
    };
    const user = new UserModel(dataUser);
    expect(user.typeUser).to.equal('Unknown');
  });
});
