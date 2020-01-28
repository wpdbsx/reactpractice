import React from 'react';
import PropTypes from 'prop-types';
const MyComponent = ({ name, favoriteNumber, children }) => {
	return (
		<div>
			내이름은 {name} <br></br>
			childere 값은 {children}
			<br></br>
			제가 좋아하는 숫자는 {favoriteNumber}이다.
		</div>
	);
};

MyComponent.defaultProps = {
	name: '바보'
};
MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired
};
export default MyComponent;
