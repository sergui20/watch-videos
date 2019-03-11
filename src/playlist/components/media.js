import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

// React-router
import { Link } from 'react-router-dom';

class Media extends PureComponent {
    // constructor(props){ 
    //     super(props) 
    //     // this.handleClick = this.handleClick.bind(this)
    //     this.state = {
    //         author: props.author
    //     }
    // }

    // state = {
    //     author: 'Sergui Morejon'
    // }

    render() {
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
           <Link to={{
               pathname: '/videos',
               search: `?id=${this.props.id}`,
               state: {
                   modal: true,
                   id: this.props.id
               }
           }}>
                <div className="Media" onClick={this.handleClick}>
                    <div className="Media-cover">
                        <img src={this.props.cover} className="Media-image" alt="" width={260} height={160}></img>
                        <h3 className="Media-title">{this.props.title}</h3>
                        <p className="Media-author">{this.props.author}</p>
                    </div>
                </div>
           </Link>
        )
    }
    handleClick = (ev) => {
        // console.log(this.props.title)
        this.props.openModal(this.props.id);
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string
}

export default Media;
