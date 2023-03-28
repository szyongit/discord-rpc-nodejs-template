import DiscordRPC from 'discord-rpc'; //<- Do not touch!

const CLIENT_ID = 'PUT_YOUR_APPLICATION_CLIENTID_HERE';
const UPDATE_INTERVAL = 60; //Interval in seconds to update activity
const START_TIME = Date.now() //Use "new Date(year, month, day).getTime()" to display the time since the specified date.
const BUTTON_URL = 'PUT_YOUR_URL_HERE'

const data = {
        details:'ENTER_DETAILS',
        state:'ENTER_STATE',
        startTimestamp:START_TIME, //<- Do not touch!
        largeImageKey:'ENTER_LARGE_IMAGE_KEY',
        largeImageText:'ENTER_LARGE_IMAGE_TEXT',
		smallImageKey:'ENTER_SMALL_IMAGE_KEY',
		smallImageText:'ENTER_SMALL_IMAGE_KEY',
        instace:false,
        buttons: [
            {
                label:'ENTER_BUTTON_LABEL',
                url:BUTTON_URL //<- Do not touch!
            }
        ]
};

const RPC = new DiscordRPC.Client({ transport:'ipc' });
DiscordRPC.register(CLIENT_ID); //<- Do not touch!

async function setActivity() {
    if(!RPC) return;
    RPC.setActivity(data);
}

RPC.on('ready', async () => {
    setActivity();
	
    console.log('Application has started successfully!');

    setInterval(() => {
        setActivity();
    }, UPDATE_INTERVAL*1000);
});

RPC.login({ clientId:CLIENT_ID }).catch(err => console.error(err)); //<- Do not touch!