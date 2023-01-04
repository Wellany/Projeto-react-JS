import ButtonBSB from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const Button = ({ loading, label, loadingLabel, ...buttonProps }) => {
    return (
        <ButtonBSB {...buttonProps}>
        { loading && (
            <>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        >  
        <span className="visually-hidden">Salvando...</span>
        </Spinner>{' '}
        </>
        )}
        {loading ? loadingLabel : label}
      </ButtonBSB>

    );
}

export default Button;
