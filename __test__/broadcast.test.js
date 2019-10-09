const {Notification, NotificationCenter} = require(`${__testDir}/../dist/broadcast.js`)

const msg = new Notification("test", {
	data: "Message"
})

eye.test("Notification", "node",
	$ => $(msg.name).Equal("test"),
	$ => $(msg.object.data).Equal("Message")
)

const callback = data => {
	console.log(data.data)
}
NotificationCenter.default.addObserver("test", callback)

const first = NotificationCenter.default.observers.keys().next().value

eye.test("NotificationCenter", "node",
	$ => $(NotificationCenter.default.observers.has(first)).Equal(true),
	$ => $(NotificationCenter.default.observers.get(first)).Equal(callback)
)

NotificationCenter.default.post(msg)
NotificationCenter.default.removeObserver("test")
