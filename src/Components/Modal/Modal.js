import {Button} from '../Button/button';
import ModalBSB from 'react-bootstrap/Modal'

export const Modal = ({ title, children, open, controls = [] }) => {
    return (
        <div>
            <ModalBSB show={open} onHide={() => { }}>
                <ModalBSB.Header closeButton>
                    <ModalBSB.Title>{title}</ModalBSB.Title>
                </ModalBSB.Header>
                <ModalBSB.Body>{children}</ModalBSB.Body>
                <ModalBSB.Footer>
                    {controls.map((control, controlIndex) => (
                        <Button key={controlIndex} 
                       {...control}
                        />
                    ))}
                </ModalBSB.Footer>
            </ModalBSB>
        </div>

    );
}

export default Modal;
