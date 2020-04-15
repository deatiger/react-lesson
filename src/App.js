import React from 'react';
import './App.scss';
import Modal from 'react-modal';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

Modal.setAppElement('#root')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      modalCount: 0,
    }
  }

  openModal() {
    this.setState({ 
      modalIsOpen: true,
      modalCount: this.state.modalCount + 1
     })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    function ModalTitle(props) {
      if　(props.count == 1) {
        return <h2 className="modal-title">すみません。<br/>これはダミーリンクです！</h2>
      } else if (props.count == 2) {
        return <h2 className="modal-title">ごめんなさい。<br/>これもダミーリンクです！</h2>
      } else if (props.count >= 3) {
        return <h2 className="modal-title">ダミーリンクだらけでごめんなさい。。。</h2>
      }
    }
    return (
      <React.Fragment>
        <Header />
        <Main openModal={()=>{ this.openModal() }}　/>
        <Footer openModal={()=>{ this.openModal() }}　/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-box">
            <ModalTitle count={this.state.modalCount}/>
            {/* <h2 className="modal-title">ごめんなさい。<br/>これはダミーリンクです！{this.state.modalCount}</h2> */}
            <button className="modal-btn" onClick={()=>{this.closeModal()}}>Close</button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 10,
  },
  content: {
    position: 'absolute',
    top: '40vh',
    height: '160px',
    border: '1px solid #ccc',
    background: '#fff',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    margin: '0 30vw',
  },
}

export default App;

// <>
//   <MediaQuery query="(max-width: 767px)">
//   </MediaQuery>
//   <MediaQuery query="(min-width: 768px)">
//   </MediaQuery>
// </>