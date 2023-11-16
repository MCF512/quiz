export const getDateAndTime = (timestamp: number | string) => {
	let day = new Date(timestamp)

	const date = `${String(day.getDate()).padStart(2, '0')}.${String(day.getMonth() + 1).padStart(2, '0')}.${String(day.getFullYear()).padStart(2, '0')}`
	const time = `${String(day.getHours()).padStart(2, '0')}:${String(day.getMinutes()).padStart(2, '0')}:${String(day.getSeconds()).padStart(2, '0')}`

	return {date, time}
}
