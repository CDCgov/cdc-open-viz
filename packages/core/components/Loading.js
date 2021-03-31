import React from 'react';
import '../styles/loading.scss';

export default function Loading({viewport = "lg"}) {
  return (
		<section className="loading" aria-hidden="true">
			<div className={`la-ball-beat la-dark ${viewport}`}>
				<div />
				<div />
				<div />
			</div>
		</section>
	)
}