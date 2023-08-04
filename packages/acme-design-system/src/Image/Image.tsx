// Generated with util/create-component.js
import React, {useCallback, useEffect, useState} from 'react';
import "./Image.scss";
import {ImageProps} from './Image.types';

const SCImage: React.FC<ImageProps> = (props) => {
	const {className, alt, src, overlay, error, fit, ratio, circle, rounded, fullWidth, fullHeight} = props;

	const classRootGenerator = ():string => {
		let classes = [
			className
		]
		return classes.join(' ')
	}

	return (
		<img
			data-testid="Image"
			{...props}
			alt={alt}
			style={{
				...props.style
			}}
			className={classRootGenerator()}
		/>
	)
};

SCImage.displayName = 'SCImage';

export default SCImage;

