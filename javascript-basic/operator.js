let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
{
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
},
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",

}

const{street,city}= data.address

const mergedUsers = {...data,name:"Muhamad Rifai", username:"Rifai",email:"milanistisukowati@gmail.com",hobbies:"hiking,futsal"};

console.log(mergedUsers)

console.log(street,city)