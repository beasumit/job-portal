export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
   
  }
  static get() {
    return users;
  }
  static addUser(userData){
    let newUsers=new UserModel(
      userData.length+1,
      userData.name,
      userData.email,
      userData.password
    )
    users.push(newUsers)

  }
}

let users = [
  new UserModel(
    1,
    "Amit",
    "amit@amit.com",
    "123",
  
  ),
  new UserModel(
    2,
    "Sumit",
    "sumit@sumit.com",
    "1234",
   
  ),
];
