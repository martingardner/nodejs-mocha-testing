module.exports.add = (a, b) => {
	return a + b;
};

module.exports.asyncAdd = (a, b, callback) => {
	setTimeout( ()=> {
		callback(a + b);
	}, 200);
};

module.exports.square = (x)=> {
	return x * x;
}

module.exports.asyncSquare = (x, callback) => {
	setTimeout( ()=> {
		callback(x * x);
	}, 200)
}

module.exports.setName = (user, fullName)=> {
	let names = fullName.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];
	return user;
}