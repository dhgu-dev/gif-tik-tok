import React, { useState } from 'react';
import {
  Form,
  CancelIcon,
  IconContainer,
  Input,
  SearchButton,
  SearchIcon,
  Splitter,
} from './SearchBar.style';

type Props = {
  onSubmit?: () => void;
};

function SearchBar({ onSubmit = () => {} }: Props) {
  const [searchWord, setSearchWord] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchWord}
        onChange={handleChange}
        placeholder="GIF 검색"
      />
      <IconContainer>
        <CancelIcon />
      </IconContainer>
      <Splitter />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  );
}

export default SearchBar;
