import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

const buttonVariants = cva(
  'relative isolate flex justify-center items-center select-none overflow-hidden rounded-sm border-2 align-middle transition-all duration-500 before:absolute before:-left-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01]',
  {
    variants: {
      foreground: {
        default: 'border-neutrals-50',
        primary: 'border-primary',
        error: 'border-error',
      },
      background: {
        default: '',
        primary: '',
      },
      size: {
        small: 'px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base',
        medium:
          'px-6 py-3 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em]',
        large:
          'px-6 py-3 md:px-8 md:py-4 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em]',
      },
      isGhost: {
        true: '',
      },
    },
    compoundVariants: [
      {
        isGhost: false,
        foreground: 'primary',
        className:
          'bg-primary hover:[&:not(:disabled)]:text-primary focus-visible:text-primary',
      },
      {
        isGhost: true,
        background: 'primary',
        className:
          'hover:[&:not(:disabled)]:text-primary focus-visible:text-primary',
      },
      {
        isGhost: true,
        foreground: 'primary',
        className: 'text-primary before:bg-primary',
      },
      {
        isGhost: false,
        background: 'primary',
        className: 'text-primary before:bg-primary',
      },
      {
        isGhost: false,
        foreground: 'default',
        className:
          'bg-neutrals-50 hover:[&:not(:disabled)]:text-neutrals-50 focus-visible:text-neutrals-50',
      },
      {
        isGhost: true,
        background: 'default',
        className:
          'hover:[&:not(:disabled)]:text-neutrals-900 focus-visible:text-neutrals-900',
      },
      {
        isGhost: true,
        foreground: 'default',
        className: 'text-neutrals-50 before:bg-neutrals-50',
      },
      {
        isGhost: false,
        background: 'default',
        className: 'text-neutrals-900 before:bg-neutrals-900',
      },
      {
        isGhost: false,
        foreground: 'error',
        className:
          'bg-error hover:[&:not(:disabled)]:text-error focus-visible:text-error',
      },
      {
        isGhost: true,
        foreground: 'error',
        className: 'text-error before:bg-error',
      },
    ],
    defaultVariants: {
      foreground: 'default',
      background: 'default',
      size: 'medium',
      isGhost: false,
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      foreground,
      background,
      size,
      isGhost,
      children,
      className,
      type,
      ...props
    },
    ref,
  ) => (
    <button
      type={type || 'button'}
      className={cn(
        buttonVariants({
          foreground,
          background,
          size,
          isGhost,
          className,
        }),
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  ),
);
Button.displayName = 'Button';

export default Button;
export { buttonVariants };
