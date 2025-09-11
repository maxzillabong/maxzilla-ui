// Common types used across components

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'warning' | 'success';
export type Color = 'neutral' | 'primary' | 'success' | 'warning' | 'error';
export type Direction = 'horizontal' | 'vertical';
export type Position = 'top' | 'right' | 'bottom' | 'left';
export type Alignment = 'start' | 'center' | 'end';

// Animation states
export type AnimationState = 'idle' | 'hover' | 'active' | 'focus' | 'disabled';

// Theme types
export type ThemeMode = 'light' | 'dark' | 'auto';

// Event types
export interface MzCustomEvent<T = any> extends CustomEvent<T> {
  target: EventTarget & { value?: any };
}

// Component base interface
export interface MzComponent {
  disabled?: boolean;
  size?: Size;
  variant?: Variant;
}