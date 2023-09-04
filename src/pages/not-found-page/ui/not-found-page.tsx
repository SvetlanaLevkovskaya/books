import React from 'react';
import pageNotFound from 'assets/not-found.png'

const NotFoundPage = () => {
	return (
		<div className="page-not-found">
			<img
				src={ pageNotFound }
				alt="Page Not Found"
				height="148"
				width="335" />
			<h1>404 - Page Not Found</h1>
			<p>The requested page could not be found.</p>
		</div>

	);
};

export default NotFoundPage;
