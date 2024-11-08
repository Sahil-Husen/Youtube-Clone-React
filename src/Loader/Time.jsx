import React from 'react'
import moment from 'moment'

function Time({time}) {
    // here we have Install a Moment named Library to display the timming in our video
    const videoTime = moment()?.startOf('day')?.seconds(time)?.format("H:mm:ss")  // this all things is coming from the Moment Library 
  return (
    <div>
        <span className='absolute bottom-0 right-0 bg-black text-white px-2 py-1 text-xs rounded-md'>{videoTime}</span>
    </div>
  )
}

export default Time