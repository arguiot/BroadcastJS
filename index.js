class BroadcastJSNotification {
	constructor(name, object) {
		this.name = name
		this.object = object
	}
}
class NotificationCenter {
	constructor() {
		this.observers = []
	}
	get default() {
		if (typeof window.BroadcastJS_Shared_Instance == "undefined") {
			window.BroadcastJS_Shared_Instance = new NotificationCenter()
		}
		return window.BroadcastJS_Shared_Instance
	}
	addObserver(name, callback, reference=null) {
		this.observers.push([name, callback, object])
	}
	removeObserver(name, reference=null) {
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

export default {
	Notification: BroadcastJSNotification,
	NotificationCenter: NotificationCenter
}
