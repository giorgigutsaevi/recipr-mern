import { useEffect, useState } from "react";

export const useDate = () => {
	const locale = 'en';
	const [today, setDate] = useState(new Date());
	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 60 * 1000);
		return () => {
			clearInterval(timer);
		}
	}, []);

	const hour = today.getHours();
	const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

	const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

	return {
		time,
		wish,
	};
};