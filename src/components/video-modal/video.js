import React, { useState } from "react";
import ReactDOM from 'react-dom';

import './videoModal.css';

// export default class Video extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.onClose}>закрыть</button>
//         {this.props.children}
//       </div>
//     )
//   }
// }

export default (videoLink) => {
  const [isVideo, setVideoStatus] = useState(false);
  return (
    <div>
    <button onClick={() => setVideoStatus(!isVideo)}>Посмотреть видео</button>
    {isVideo &&
      ReactDOM.createPortal(
        <div>
          <div>
          <button onClick={() => setVideoStatus(!isVideo)}>закрыть</button>
          <iframe
            title="writer-video"
            width="100%"
            height="100%"
            src={videoLink}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          </div>
      </div>,
        document.getElementById('portal')
      )
    }
    </div>
  )
}
