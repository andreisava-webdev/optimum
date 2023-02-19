import styled from '@emotion/styled';
import { ActionIcon, createPolymorphicComponent, NavLink } from '@mantine/core';
import type { NavLinkProps } from '@mantine/core';
import { NavLink as RemixNavLink, useLocation } from '@remix-run/react';
import type { IconType } from 'react-icons';

interface ISidebarLink {
  text: string;
  path: string;
  icon: IconType;
}

const __StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.brand[1]};
  font-weight: bold;
  & span {
    font-size: 14px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.brand[6]};
  }
`;

const StyledLink = createPolymorphicComponent<'navlink', NavLinkProps>(
  __StyledLink
);

export const SidebarLink = ({ text, path, icon }: ISidebarLink) => {
  const location = useLocation();
  const isActive = path.startsWith(location.pathname);

  return (
    <StyledLink
      component={RemixNavLink}
      to={path}
      label={text}
      icon={
        <ActionIcon
          component={icon}
          size={32}
          color={isActive ? 'brand.6' : 'brand.1'}
        />
      }
      active={isActive}
    />
  );
};
