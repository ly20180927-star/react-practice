/**
 * 可复用的 Button 组件
 */

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      loading = false,
      disabled = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const classes = `
      btn
      btn-${variant}
      btn-${size}
      ${loading ? 'btn-loading' : ''}
      ${disabled ? 'btn-disabled' : ''}
      ${className}
    `.trim();

    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
        {loading && <span className="btn-spinner" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
