const newTimer = (attrs = {}) => {
    const timer = {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        id: Math.random(),
        elapsed: 0
    }
    return timer
}

const padding = (numberString, size) => {
    let pad = numberString
    while(pad.length < size) pad = `0${pad}`
    return pad
}

const millisecondsToHuman = (millisec) => {
    const seconds = Math.floor((millisec / 1000) % 60)
    const minutes = Math.floor((millisec / 1000 / 60) % 60)
    const hours = Math.floor(millisec / 1000 / 60 / 60)
  
    const humanized = [
      padding(hours.toString(), 2),
      padding(minutes.toString(), 2),
      padding(seconds.toString(), 2)
    ].join(':')
  
    return humanized
}

const renderElapsedString = (elapsed, runningSince) => {
    let totalElapsed = elapsed
    if (runningSince) {
      totalElapsed += Date.now() - runningSince
    }
    return millisecondsToHuman(totalElapsed)
}
  
export {
    millisecondsToHuman, newTimer, renderElapsedString
}
  