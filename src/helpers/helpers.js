// Regarding how to show timer 
// Got this idea from my 7th Sem Project
// Here There is no use of React. Its just javascript.


const newTimer = (attrs = {}) => {
    console.log(attrs)
    const timer = {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        id: Math.random(),
        elapsed: 0
    }
    console.log(timer)
    return timer
}

const padding = (numberString, size) => {
    let pad = numberString
    while(pad.length < size) pad = `0${pad}`
    return pad
}

const milliseconds = (millisec) => {
    const seconds = Math.floor((millisec / 1000) % 60)
    const minutes = Math.floor((millisec / 1000 / 60) % 60)
    const hours = Math.floor(millisec / 1000 / 60 / 60)
  
    const showTime = [
      padding(hours.toString(), 2),
      padding(minutes.toString(), 2),
      padding(seconds.toString(), 2)
    ].join(':')
  
    return showTime
}

const renderElapsedString = (elapsed, runningSince) => {
    let totalElapsed = elapsed
    if (runningSince) {
      totalElapsed += Date.now() - runningSince
    }
    return milliseconds(totalElapsed)
}
  
export {
    milliseconds, newTimer, renderElapsedString
}
  