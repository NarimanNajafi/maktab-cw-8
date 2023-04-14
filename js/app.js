////////////////////1//////////////////////
// function f() {
//   alert(this); // ?
// }
// let user = {
//   g: f.bind(null),
// };
// user.g();
/////////////////////2////////////////////

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();

// }
// let user = {
//   name: "John",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk, user.loginFail);

///////////////////3////////////////////////

// const delay = (f, ms) => (arg) => setTimeout(() => f(arg), ms);

// const test = (x) => {
//   console.log(x);
// };

// const t2000 = delay(test, 2000);
// const t1000 = delay(test, 1000);
// const t3000 = delay(test, 3000);

// t1000("check after 1000ms");
// t2000("check after 2000ms");
// t3000("check after 3000ms");

/* #####  (4)  ####### */

const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

const handleMouseMove = debounce((ev) => {
  console.log(ev);
}, 250);

window.addEventListener("mousemove", handleMouseMove);
