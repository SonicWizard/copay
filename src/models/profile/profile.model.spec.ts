import { Profile } from './profile.model';
describe('Profile Model', () => {
  let profile;

  beforeEach(() => {
    profile = new Profile().create({
      credentials: []
    });
  });

  it('should create a profile from a string', () => {
    let profileStr = JSON.stringify(profile);

    let objFromStr = profile.fromString(profileStr);
    expect(objFromStr).toEqual(profile);
  });

  it('should convert a profile from an obj to a string', () => {
    let comparisonProfileStr = JSON.stringify(profile);

    let profileStr = profile.toObj();

    expect(profileStr).toEqual(comparisonProfileStr);
  });

  it('should check to see if the profile has a wallet', () => {
    let hasWallet = profile.hasWallet(null);

    expect(hasWallet).toBe(false);
  });

  it('should delete a wallet', () => {
    let deleted = profile.deleteWallet(null);

    expect(deleted).toBe(false);
  });
});
