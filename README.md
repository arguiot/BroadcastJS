# BroadcastJS
A simple notification dispatch mechanism that enables the broadcast of information to registered observers within your code.

> What is BroadcastJS?

BroadcastJS is a tiny library for a notification dispatch mechanism that enables the broadcast of information to registered observers. Basically, it helps you escalate your data without caring about the context within your code. So, it enables you to send data to a different part of your program.

# Install
```
npm install @arguiot/broadcast.js --save
```
# Notification

A `Notification` is a container for information broadcast through a notification center to all registered observers.

A notification contains a name and an object. It is broadcast to by instances of `NotificationCenter`. The `name` is a tag identifying the notification. The `object` is any object that the poster of the notification wants to send to observers of that notification (typically, the data posted by the notification).

### Structure
```js
class Notification {
	constructor(name, object = null) {} // object is the data you want to share
}
```

# NotificationCenter

The `NotificationCenter` is a huge part of BroadcastJS: it's the object that will help manage all your observers and contexts.

When an object adds itself as an observer, it specifies which notifications it should receive. An object may, therefore, call this method several times in order to register itself as an observer for several different notifications.
Each running app has a default notification center, and you can create new notification centers to organize communications in particular contexts.

> Please remember that a notification center can deliver notifications only within a single program, and cannot share data across windows or tabs.

### Structure
```js
class NotificationCenter {
	get default() {}
	addObserver(name, callback, reference = null) {} // reference helps referencing a specific observer that may listen to the same Notification.
	removeObserver(name, reference = null) {}
	post(notification) {}
}
```
### The `default` NotificationCenter
The default getter helps you get a global instance of `NotificationCenter`, so you can share notifications within your entire web app.

If your web app uses notifications extensively, you may want to create and post to your own notification centers rather than posting only to the default notification center. When a notification is posted to a notification center, the notification center scans through the list of registered observers, which may slow down your web app. By organizing notifications functionally around one or more notification centers, less work is done each time a notification is posted, which can improve performance throughout your app.


# Demo

```js
const { Notification, NotificationCenter } = require("@arguiot/broadcast.js")


// Somewhere in your program

NotificationCenter.default.addObserver("test", data => {
	console.log(data.data) // will print "Message"
})

// Somewhere else
const msg = new Notification("test", {
	data: "Message"
})

NotificationCenter.default.post(msg)
```
