const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click',handlePlay)


function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play');
}

$pause.addEventListener('click',handlePause)

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al boton de pause')
}

$backward.addEventListener('click',handleBackward)

function handleBackward() {
    $video.currentTime =  $video.currentTime - 10
    console.log('para atras 10 segundos', $video.currentTime)
}

$forward.addEventListener('click', handleForward)

function handleForward() {
    $video.currentTime =  $video.currentTime + 10
    console.log('para adelante 10 segundos', $video.currentTime)
}

$video.addEventListener('loadedmetadata',handleLoaded)

function handleLoaded() {
    $progress.max = $video.duration
    console.log('Ha cargado mi video',$video.duration)
}
$video.addEventListener("timeupdate",handleTimeUpdate)
function handleTimeUpdate() {
    $progress.value = $video.currentTime
    console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input',handleInput)

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}

