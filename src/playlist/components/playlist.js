import React from 'react';
import MediaContainer from '../container/media';
import './playlist.css';

// class Playlist extends Component {
//     render() {
//         const playlists = this.props.data.categories[0].playlist;
//         console.log(this.props.data)
//         return (
//             <div className="Playlist">
//                 {playlists.map( (item) => <Media {...item} key={item.id}></Media>)}
//             </div>
//         )
//     }
// }

// Mejor usamos componentes funcionales, que son basicamente funciones, ya que simplemente se encargan del UI y no tienen ciclo de vida. Simplemente nos retornan un valor
function Playlist (props) {
    // console.log(props)
    return (
        <div className="Playlist">
            {props.playlist.map( (mediaID) => <MediaContainer id={mediaID} key={mediaID} openModal={props.openModal}></MediaContainer>)}
        </div>
    )
}

export default Playlist;