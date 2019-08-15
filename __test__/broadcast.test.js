const {Notification, NotificationCenter} = require(`${__testDir}/../dist/broadcast.js`)

const msg = new Notification("test", {
	data: "Message"
})

eye.test("Notification", "node",
	$ => $(msg.name).Equal("test"),
	$ => $(msg.object.data).Equal("Message")
)
NotificationCenter.default.addObserver("test", data => {
	console.log(data.data)
})

eye.test("NotificationCenter", "node",
	$ => $(NotificationCenter.default.observers.length).Equal(1),
	$ => $(NotificationCenter.default.observers[0][0]).Equal("test")
)

NotificationCenter.default.post(msg)
