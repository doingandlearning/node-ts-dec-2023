// --check (-c) to check the syntax

console.log("Hello");

// --eval (-e) / --print (-p)

// --require / -r - will preload anything you pass it!
function f(n = 99) {
	if (n === 0) throw Error()
	f(n - 1)
}

f()

// --stack-trace-limit=n