class BroadcastJSNotification {
	name: string;
	object: unknown;

	constructor(name: string, object = null) {
		this.name = name
		this.object = object
	}
}
class NotificationManager {
	observers: Map<string, (object: unknown) => void>
	constructor() {
		this.observers = new Map()
	}
	get default() {
		if (typeof globalThis.BroadcastJS_Shared_Instance == "undefined") {
			globalThis.BroadcastJS_Shared_Instance = new NotificationManager()
		}
		return globalThis.BroadcastJS_Shared_Instance
	}
	addObserver(name: string, callback: (object: unknown) => void, reference = null) {
		this.observers.set(`${name}, ${reference}`, callback)
	}
	removeObserver(name: string, reference = null) {
		this.observers.delete(`${name}, ${reference}`)
	}
	post(notification: BroadcastJSNotification) {
		const name = notification.name
		for (const n of this.observers.keys()) {
			if (n.split(",")[0] == name) {
				this.observers.get(n)(notification.object)
			}
		}
	}
}

export { BroadcastJSNotification as Notification }
export const NotificationCenter = new NotificationManager()