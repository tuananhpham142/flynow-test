export interface CustomClasses<T extends string = string> {
    customClasses?: Partial<Record<T, string>>;
}

export type Size =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '2qx'
    | '3qx'
    | '4qx'
    | '5qx'
    | '2hx'
    | '3hx'
    | '4hx'
    | '5hx'
    | '2tx'
    | '3tx'
    | '4tx'
    | '5tx';

export type Shadow = 'shadow-xs' | 'shadow-sm' | 'shadow' | 'shadow-lg' | 'shadow-xl' | 'shadow-2xl' | 'shadow-none';

export type MainColor = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

export type GreyColor =
    | 'grey-100'
    | 'grey-200'
    | 'grey-300'
    | 'grey-400'
    | 'grey-500'
    | 'grey-600'
    | 'grey-700'
    | 'grey-800'
    | 'grey-900';

export type PrimaryColor = 'primary' | 'primary-light' | 'primary-lighter' | 'primary-dark' | 'primary-darker';
export type SecondaryColor =
    | 'secondary'
    | 'secondary-light'
    | 'secondary-lighter'
    | 'secondary-dark'
    | 'secondary-darker';
export type DangerColor = 'danger' | 'danger-light' | 'danger-lighter' | 'danger-dark' | 'danger-darker';
export type SuccessColor = 'success' | 'success-light' | 'success-lighter' | 'success-dark' | 'success-darker';
export type WarningColor = 'warning' | 'warning-light' | 'warning-lighter' | 'warning-dark' | 'warning-darker';
export type BorderRadius = 'none' | 'sm' | 'rounded' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

export type PaletteColors = PrimaryColor | SecondaryColor | DangerColor | SuccessColor | WarningColor | GreyColor;

export type AlignHorizontalVariant = 'right' | 'center' | 'left';

export type AlignVerticalVariant = 'top' | 'center' | 'bottom';

export type JustifyFlexVariant = 'start' | 'end' | 'center' | 'between' | 'evenly';

export type AlignFlexVariant = 'start' | 'end' | 'center' | 'stretch';

export type PositionLocation = 'top' | 'bottom' | 'left' | 'right';

export type Opacity = 0 | 5 | 10 | 15 | 20 | 25 | 50 | 75 | 100;
