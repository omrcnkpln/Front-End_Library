const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    // add: function(num1, num2){
    //     return num1 + num2;
    // }
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Brad' };
        user['lastName'] = 'Traversy';
        return user;
    },
    fetchUser: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error')
}

// Working with async data
//Promise
// const aaa = async () => {
//     const bbb = await functions.fetchUser();
//     console.log(bbb);
// }

// aaa();

module.exports = functions;