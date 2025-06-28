const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

//
describe('UserController', () => {
  let uc, user1, user2, user3;

  beforeEach(() => {
    uc    = new UserController();
    user1 = new User(1, 'Claire', 'clairer@umbrella.com');
    user2 = new User(2, 'Leon', 'leonk@umbrella.com');
    user3 = new User(3, 'Ada', 'adaw@umbrella.com');
    uc.add(user1);
    uc.add(user2);
  });

  
  test('add() does not add a user that was not previously added', () => {
    expect(uc.getUsers()).not.toContain(user3);
  });

  
  test('remove() does nothing if the user is not in the list', () => {
    const snapshot = uc.getUsers().slice();  
    uc.remove(user3);
    expect(uc.getUsers()).toEqual(snapshot);
  });

  
  test('findByEmail() returns the correct user if it exists', () => {
    expect(uc.findByEmail('leonk@umbrella.com')).toBe(user2);
  });

  test('findByEmail() returns undefined if the email is not found', () => {
    expect(uc.findByEmail('not@exist.com')).toBeUndefined();
  });

  
  test('findById() returns the correct user if it exists', () => {
    expect(uc.findById(1)).toBe(user1);
  });

  test('findById() returns undefined if the id is not found', () => {
    expect(uc.findById(999)).toBeUndefined();
  });
});
