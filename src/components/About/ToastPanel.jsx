import Toast from 'react-bootstrap/Toast';

export default function ToastPanel({title, text, img}){
    return(
        <div>
        <Toast
          className="d-inline-block m-1"
          bg={'dark'}
          style={{width: 150}}
        >
          <Toast.Header>
            <img
              src={img}
              className="rounded me-2"
              alt=""
              style={{height: 20}}

            />
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body >
            <p style={{color: 'white', fontFamily: 'cursive', fontSize: 10}} >{text}</p>
          </Toast.Body>
        </Toast>
        </div>
    )
}