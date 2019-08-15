class BroadcastJSNotification {
	constructor(name, object = null) {
		this.name = name
		this.object = object
	}
}
class NotificationCenter {
	constructor() {
		this.observers = []
	}
	get default() {
		const exportGlobal = (name, object) => {
			if (typeof(global) !== "undefined") {
				// Node.js
				global[name] = object;
			} else if (typeof(window) !== "undefined") {
				// JS with GUI (usually browser)
				window[name] = object;
			} else {
				throw new Error("Unkown run-time environment. Currently only browsers and Node.js are supported.");
			}
		};

		if (typeof BroadcastJS_Shared_Instance == "undefined") {
			exportGlobal("BroadcastJS_Shared_Instance", new NotificationCenter())
		}
		return BroadcastJS_Shared_Instance
	}
	addObserver(name, callback, reference = null) {
		this.observers.push([name, callback, reference])
	}
	removeObserver(name, reference = null) {
		this.observers.forEach((o, i) => {
			if (o[0] == name && o[2] == reference) {
				this.observers.splice(i, 1)
			}
		})
	}
	post(notification) {
		const name = notification.name
		this.observers.forEach((o, i) => {
			if (o[0] == name) {
				o[1](notification.object)
			}
		})
	}
}


const exported = {
	Notification: BroadcastJSNotification,
	NotificationCenter: new NotificationCenter()
}

// Browserify / Node.js
if (typeof define === "function" && define.amd) {
	define(() => exported);
	// CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
	// Support Node.js specific `module.exports` (which can be a function)
	if (typeof module !== "undefined" && module.exports) {
		exports = module.exports = exported;
	}
	// But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
	exports.default = exported;
} else if (typeof global !== "undefined") {
	global.BroadcastJS = exported;
}
