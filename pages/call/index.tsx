import ReactPlayer from 'react-player'
import React from 'react';


export default function Home() {

    let peerConnection: any;
    let localStream: any = null;
    let remoteStream: any = null;
    const [streamd, setStream] = React.useState<any>(null)

    let client;

    let servers = {
        iceServers: [
            {
                urls: ['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
            }
        ]
    }


    const init = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
        setStream(stream);
    }
    init()

    // let handlePeerJoined = async (MemberId) => {
    //     console.log('A new peer has joined this room:', MemberId)
    //     createOffer(MemberId)
    // }

    // let handleMessageFromPeer = async (message, MemberId) => {
    //     message = JSON.parse(message.text)
    //     console.log('Message:', message.type)

    //     if(message.type === 'offer'){
    //         if(!localStream){
    //             localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
    //             document.getElementById('user-1').srcObject = localStream
    //         }

    //         document.getElementById('offer-sdp').value = JSON.stringify(message.offer)
    //         createAnswer(MemberId)
    //     }

    //     if(message.type === 'answer'){
    //         document.getElementById('answer-sdp').value = JSON.stringify(message.answer)
    //         addAnswer()
    //     }

    //     if(message.type === 'candidate'){
    //         if(peerConnection){
    //             peerConnection.addIceCandidate(message.candidate)
    //         }
    //     }
    // }

    // let createPeerConnection = async (sdpType, MemberId) => {
    //     peerConnection = new RTCPeerConnection(servers)

    //     remoteStream = new MediaStream()
    //     document.getElementById('user-2').srcObject = remoteStream

    //     localStream.getTracks().forEach((track) => {
    //         peerConnection.addTrack(track, localStream)
    //     })

    //     peerConnection.ontrack = async (event) => {
    //         event.streams[0].getTracks().forEach((track) => {
    //             remoteStream.addTrack(track)
    //         })
    //     }

    //     peerConnection.onicecandidate = async (event) => {
    //         if(event.candidate){
    //             document.getElementById(sdpType).value = JSON.stringify(peerConnection.localDescription)
    //             client.sendMessageToPeer({text:JSON.stringify({'type':'candidate', 'candidate':event.candidate})}, MemberId)
    //         }
    //     }
    // }

    // let createOffer = async (MemberId) => {

    //     createPeerConnection('offer-sdp', MemberId)

    //     let offer = await peerConnection.createOffer()
    //     await peerConnection.setLocalDescription(offer)

    //     document.getElementById('offer-sdp').value = JSON.stringify(offer)
    //     client.sendMessageToPeer({text:JSON.stringify({'type':'offer', 'offer':offer})}, MemberId)
    // }

    // let createAnswer = async (MemberId) => {
    //     createPeerConnection('answer-sdp', MemberId)

    //     let offer = document.getElementById('offer-sdp').value
    //     if(!offer) return alert('Retrieve offer from peer first...')

    //     offer = JSON.parse(offer)
    //     await peerConnection.setRemoteDescription(offer)

    //     let answer = await peerConnection.createAnswer()
    //     await peerConnection.setLocalDescription(answer)

    //     document.getElementById('answer-sdp').value  = JSON.stringify(answer)
    //     client.sendMessageToPeer({text:JSON.stringify({'type':'answer', 'answer':answer})}, MemberId)
    // }

    // let addAnswer = async () => {
    //     let answer = document.getElementById('answer-sdp').value
    //     if(!answer) return alert('Retrieve answer from peer first...')

    //     answer = JSON.parse(answer)

    //     if(!peerConnection.currentRemoteDescription){
    //         peerConnection.setRemoteDescription(answer)
    //     }

    // }

    // init()

    console.log(streamd);


    return (
        <>
            {streamd && (
                <>
                    <h1>My Stream</h1>
                    <ReactPlayer
                        playing
                        muted
                        height="100px"
                        width="200px"
                        url={streamd}
                    />
                </>
            )}
        </>
    )
}
