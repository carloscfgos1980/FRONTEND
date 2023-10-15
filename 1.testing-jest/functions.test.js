const functions = require('./functions');

/*('Adds 2 + 2 to equal 4')it is just a message to know what we want to test*/
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be Null', () => {
    expect(functions.isNul()).toBeNull();
});

test('Should be Falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be Truthy', () => {
    expect(functions.checkValue1(2)).toBeTruthy();
});

//with object and arrays we use 'toEqual'. 'toBe' is for primitive variables
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

//Less Than and greater
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});


// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// Regex. It should fail cos there is I
// test('There is no I in team', () => {
//     expect('teamI').not.toMatch(/I/);
// });

// Regex. It should fail cos there is I
// test('There is no I in team', () => {
//     expect('teami').not.toMatch(/I/i);//to test it where is capital letters or not
// });

// Arrays
test('Admin should be in the usernames', () => {
    userNames = ['john', 'karen', 'admin']
    expect(userNames).toContain('admin');
});

//Working with async data
//Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     });
// });

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
});