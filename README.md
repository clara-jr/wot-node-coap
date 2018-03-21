## wot-node-coap

### Dependencies

- node.js
- npm

### How to install

<pre>
git clone https://github.com/clara-jr/wot-node-coap.git
cd wot-node-coap
cd wot-node-coap-client
npm install
cd ..
cd wot-node-coap-server
npm install
cd ..
cd wot-react-native-coap-client
npm install
</pre>

### How to configure

+ The client is configured to listen in port 8484. You can modify it.
+ Now you can see the app in port 8484: http://localhost:8484
+ The server is configured to listen in port 8080. You can modify it.
+ Now you can see the app in port 8080: http://localhost:8080

### How to run

<pre>
cd wot-node-coap-client
node copper.js

cd wot-node-coap-server
node copper.js

cd wot-react-native-coap-client
exp start (*)
</pre>

(*) Use npm start to work in the host computer.
Open Expo Client on your device. Use it to scan the QR code printed by exp start.
