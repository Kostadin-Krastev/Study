const buddy = {
  pen: true,
  paper: true,
};

const me = {
  paper: true,
};
// Link two existing objects with prototype link
Object.setPrototypeOf(me, buddy);

console.log(me);
console.log(me.pen);

// Get prototype
let prototypeOfMe = Object.getPrototypeOf(me);
// let prototypeOfMe = me.__proto__; // this should not be used. Internal use only

console.log(prototypeOfMe); // same as buddy object
console.log(prototypeOfMe === buddy); // same reference

// Create Object from Prototype
console.log('-----Create Object from Prototype--------');
let baseObj = {
  name: 'Pesho',
};
let newObj = Object.create(baseObj); // create an object with specific inheritance from other object.
console.log(newObj);
console.log(newObj.__proto__);

console.log('-----Assign Object from Prototype----------');
let newObjAssign = Object.assign({}, baseObj); // copy properties from another object
console.log(newObjAssign);
console.log(newObjAssign.__proto__);

// For in iterates not only own properties but prototype properties
for (const prop in me) {
  console.log(prop);
}

// Iterate only properties
for (const prop in me) {
  if (me.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
