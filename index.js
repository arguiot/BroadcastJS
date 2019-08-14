class NotificationCenter {
	get default() {
		if (typeof window.BroadcastJS_Shared_Instance == "undefined") {
			window.BroadcastJS_Shared_Instance = new NotificationCenter()
		}
		return window.BroadcastJS_Shared_Instance
	}
}

// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => new NotificationCenter());
  // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
  // Support Node.js specific `module.exports` (which can be a function)
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = new NotificationCenter();
  }
  // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
  exports.NotificationCenter = new NotificationCenter();
} else if (typeof global !== "undefined") {
  global.NotificationCenter = new NotificationCenter();
}
