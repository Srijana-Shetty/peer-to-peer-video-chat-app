let localStream;
let remoteStream;

let init = async () => {
   localStream = await navigator.mediaDevices.getUserMedia({})
}

init()