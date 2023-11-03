import React, {
  useMemo,
  useState,
  ChangeEvent,
  useCallback,
  useLayoutEffect,
  FormEventHandler,
} from 'react';
import { SubmitBtn } from '@Components/buttons';
import Form from 'react-bootstrap/esm/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Props } from '@Types';
import './style.css';

const PATTERN = 'GIVEPOWERBACK';

const DeleteAcct = ({ handleDeleteUser }: Props) => {
  const [isInvalid, setIsInvalid] = useState(false),
    [buttonIsHidden, setButtonIsHidden] = useState(true),
    [deleteAcctInput, setDeleteAcctInput] = useState('');

  const wrongEntry = useMemo(() => {
    return deleteAcctInput !== PATTERN;
  }, [deleteAcctInput]);

  const handleHideButton = useCallback(() => {
    setButtonIsHidden(wrongEntry);
    if (wrongEntry) setDeleteAcctInput('');
  }, [wrongEntry, setButtonIsHidden]);

  useLayoutEffect(() => {
    handleHideButton();
  }, [wrongEntry, handleHideButton]);

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDeleteAcctInput('');
        setButtonIsHidden(true);
        (handleDeleteUser as () => void)();
      },
      [handleDeleteUser, setButtonIsHidden]
    ),
    handleInputChange = useCallback((e: ChangeEvent) => {
      setIsInvalid(true);
      if (typeof e === 'object')
        setDeleteAcctInput((e.target as HTMLInputElement).value);
      else setDeleteAcctInput('');
    }, []);

  return (
    <Form
      noValidate
      className={'pt-lg-3 pt-2'}
      validated={isInvalid}
      id={'delete-modal-input'}
      onSubmit={handleSubmit}>
      <Form.Group controlId='formDeleteAccount'>
        <Form.Text>
          <p className='delete-acct-instructions pb-1'>
            To delete your account, type:
            <br />
            <span className='input-pattern'>{PATTERN}</span>
            <br />
            then click "DELETE ACCOUNT"
          </p>
        </Form.Text>
        <Form.Control
          onChange={(e) => handleInputChange(e)}
          className={'mt-1 my-lg-2 mb-lg-2 mb-1'}
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          pattern={PATTERN}
          type={'text'}
          required
        />
        <Row>
          {!buttonIsHidden && (
            <Col className='pb-lg-1'>
              <i className='bi bi-exclamation-triangle-fill text-danger' />{' '}
              <i className='no-refunds text-uppercase small'>
                Pending donations are NOT refunded!{' '}
              </i>
              <i className='bi bi-exclamation-triangle-fill text-danger' />
            </Col>
          )}
        </Row>
      </Form.Group>
      <Form.Group className='mt-1 mt-lg-2'>
        <SubmitBtn
          classProp={'delete-account-btn'}
          btnId={'delete-acct--btn'}
          value={'DELETE ACCOUNT'}
          hidden={buttonIsHidden}
          variant={'danger'}
          size={'lg'}
        />
      </Form.Group>
    </Form>
  );
};

export default React.memo(DeleteAcct);
