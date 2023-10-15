const axios = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,//arrow function
    /*
    Same function than above with classical way of writting it

    add: function(num1, num2) {
        return num1 + num2
    }
    */
    isNul: () => null,
    checkValue: x => x,
    checkValue1: x => x = 2,
    createUser: () => {
        const user = { firstName: 'Brad' };
        user['lastName'] = 'Traversy';
        return user;
    },
    fetchUser: () =>
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error')
};

module.exports = functions;