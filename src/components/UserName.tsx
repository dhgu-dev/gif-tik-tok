import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  name: string;
  email: string;
  href: string;
  direction: 'row' | 'column';
  size: 'large' | 'medium' | 'small';
};

const UserNameContainer = styled.div<Pick<Props, 'direction'>>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${({ direction }) =>
    direction === 'row' &&
    css`
      align-items: center;
      gap: 0.5rem;
    `}
`;

const sizeToPxConverter = (large: number, medium: number, small: number) => ({
  large,
  medium,
  small,
});

const Link = styled.a<Pick<Props, 'direction' | 'size'>>`
  color: black;
  font-weight: bold;
  text-decoration: none;
  font-size: ${({ size }) => `${sizeToPxConverter(32, 18, 16)[size]}px`};
  ${({ direction }) =>
    direction === 'row' &&
    css`
      &&:hover {
        text-decoration: underline;
      }
    `}
`;

const Email = styled.span<Pick<Props, 'size'>>`
  color: rgba(22, 24, 35, 0.75);
  font-size: ${({ size }) => `${sizeToPxConverter(18, 14, 12)[size]}px`};
`;

function UserName({ name, email, href, direction, size }: Props) {
  return (
    <UserNameContainer direction={direction}>
      <Link href={href} direction={direction} size={size}>
        {name}
      </Link>
      <Email size={size}>{email}</Email>
    </UserNameContainer>
  );
}

export default UserName;
