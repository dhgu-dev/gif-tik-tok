import { MdCancel } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const Form = styled.form`
  background-color: rgba(22, 24, 35, 0.06);
  box-sizing: content-box;
  border: none;
  border-radius: 2rem;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  caret-color: #fe2e2e;
  line-height: 24px;
  font-size: 16px;
`;

const IconContainer = styled.div`
  padding: 0 0.7rem;
  line-height: 24px;
  padding-top: 3px;
`;

const CancelIcon = styled(MdCancel)`
  font-size: 16px;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border-radius: 0 2rem 2rem 0;
  margin: -12px -16px -12px 0;
  padding: 12px 16px 11px 12px;
  border: none;
  &:hover {
    background-color: #cccccc5d;
  }
`;

const SearchIcon = styled(BiSearch)`
  font-size: 24px;
  vertical-align: middle;
`;

const Splitter = styled.span`
  width: 1px;
  height: 28px;
  margin: -3px 0;
  background: rgba(22, 24, 35, 0.12);
`;

export {
  Form,
  Input,
  IconContainer,
  CancelIcon,
  SearchButton,
  SearchIcon,
  Splitter,
};
