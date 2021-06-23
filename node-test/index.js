const express = require('express')
const app = express()
const port = 3000
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://test.mosquitto.org')
const cors = require('cors');
var timer_id = null;
var topic = "test/random/data";

app.use(cors());

client.on('connect', () => {
    client.subscribe(topic)
})

client.on('message', (topic, message) => {
    console.log(message.toString())
})

function publishmessage(topic) {
    let message = {
        currentTimeStamp: Date.now().toLocaleString(),
        currentValue: Date.now() + 1,
    }
    if (client.connected == true) {
        client.publish(topic, JSON.stringify(message));
    }
}

app.post('/', (req, res) => {
    var mode = req.query.mode;
    switch (mode) {
        case 'START':
            timer_id = setInterval(function () { publishmessage(topic); }, 3000);
            res.send({ msg: 'Started! Message Will send every 3 sec' });
            break;
        case 'STOP':
            if (timer_id != null) {
                clearTimeout(timer_id);
                timer_id = null;
                res.send({ msg: 'Stoped' });
            }
            else {
                res.send({ msg: 'Already Stoped' });
            }
            break;
        default: {
            res.send({ msg: 'Mode Not Specified' });
        }
    }
});

app.get('/', (req, res) => {
    if (timer_id == null) {
        res.send({ Status: "STOPPED", Topic: topic });
    }
    else {
        res.send({ Status: "RUNNING", Topic: topic });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})