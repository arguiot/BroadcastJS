class BroadcastJSNotification {
	constructor(name, object) {
		this.name = name
		this.object = object
	}
}
class NotificationCenter {
	constructor() {
		this.observers = {}
	}
	get default() {
		if (typeof window.BroadcastJS_Shared_Instance == "undefined") {
			window.BroadcastJS_Shared_Instance = new NotificationCenter()
		}
		return window.BroadcastJS_Shared_Instance
	}
}

export default {
	Notification: BroadcastJSNotification,
	NotificationCenter: NotificationCenter
}
