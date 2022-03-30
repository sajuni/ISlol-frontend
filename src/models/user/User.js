export default class User {
  constructor(seq, email, name, roles, addr, nick) {
    this.seq = seq;
    this.email = email;
    this.name = name;
    this.roles = roles;
    this.addr = addr;
    this.nick = nick;
  }
}
