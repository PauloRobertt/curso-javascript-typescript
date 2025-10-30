interface VideoPlayerElements {
    videoPlayer: HTMLVideoElement;
    buttonStart: HTMLButtonElement
    buttonStop: HTMLButtonElement
};

interface VideoPlayerProtocols {
    start():void;
    stop():void;
    iniciarEventos():void;
}

class VideoPlayer implements VideoPlayerProtocols{
    private videoPlayer: HTMLVideoElement;
    private buttonStart: HTMLButtonElement;
    private buttonStop: HTMLButtonElement;

    constructor(videoPlayerElements: VideoPlayerElements){
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.buttonStart = videoPlayerElements.buttonStart;
        this.buttonStop = videoPlayerElements.buttonStop;
    }

    iniciarEventos(): void {
        this.buttonStart.addEventListener('click', ()=>{
            this.start();
        });
        this.buttonStop.addEventListener('click',()=>{
            this.stop();
        })
    }

    start(): void {
        if(this.videoPlayer.paused){
            this.videoPlayer.play();
            this.buttonStart.innerText = 'Pause'
        }else{
            this.videoPlayer.pause();
            this.buttonStart.innerText = 'Play'
        }
    }

    stop(): void {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.buttonStart.innerText = 'Play'
    }
}

const videoPlayerExercicio = new VideoPlayer({
    videoPlayer: document.querySelector('.video') as HTMLVideoElement,
    buttonStart: document.querySelector('.start') as HTMLButtonElement,
    buttonStop:  document.querySelector('.stop') as HTMLButtonElement
});

videoPlayerExercicio.iniciarEventos();
