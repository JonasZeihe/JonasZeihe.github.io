import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Icons from 'react-icons/fa'; // Dynamischer Icon-Import

const BadgeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(0.8)};
  background-color: ${({ theme, variant, customColor }) =>
    customColor || theme.colors[variant]?.main || theme.colors.primary.main};
  color: ${({ theme, variant, customColor }) =>
    customColor
      ? theme.colors.neutral.white
      : theme.colors[variant]?.contrast || theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  padding: ${({ theme }) => `${theme.spacing(0.8)} ${theme.spacing(2)}`};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ theme, variant, customColor }) =>
      customColor || theme.colors[variant]?.dark || theme.colors.primary.dark};
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing(0.6)} ${theme.spacing(1.5)}`};
    font-size: ${({ theme }) => theme.typography.fontSize.xsmall};
    gap: ${({ theme }) => theme.spacing(0.6)};
  }
`;
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

export default function Badge({
  label,
  icon,
  variant = 'primary',
  customColor,
}) {
  const Icon = Icons[icon];

  return (
    <BadgeContainer variant={variant} customColor={customColor}>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      {label}
    </BadgeContainer>
  );
}

Badge.propTypes = {
  /**
   * Textlabel des Badges
   */
  label: PropTypes.string.isRequired,
  /**
   * Name des Icons aus react-icons/fa (z. B. "FaPython")
   */
  icon: PropTypes.string,
  /**
   * Farbvariante des Badges
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'accent',
    'success',
    'warning',
    'info',
    'neutral',
  ]),
  /**
   * Benutzerdefinierte Hintergrundfarbe
   */
  customColor: PropTypes.string,
};

Badge.defaultProps = {
  icon: null,
  variant: 'primary',
  customColor: null,
};
