import React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	overlay?: string;
	error?: string;
	fit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
	ratio?: '1x1' | '3x2' | '4x3' | '16x9' | '21x9';
	circle?: boolean;
	fullWidth?: boolean;
	fullHeight?: boolean;
	rounded?: 1 | 2 | 3 | 4 | 5 ;
	className?: string;
}
