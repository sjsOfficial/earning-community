
function millisecondToSecondMinuteHour(milliseconds: number) {
    const millisecondsInHour = 60 * 60 * 1000; // 1 hour = 60 minutes * 60 seconds * 1000 milliseconds
    const millisecondsInMinute = 60 * 1000; // 1 minute = 60 seconds * 1000 milliseconds
    const millisecondsInSecond = 1000; // 1 second = 1000 milliseconds

    // Calculate hours
    const hours = Math.floor(milliseconds / millisecondsInHour);
    // Calculate remaining milliseconds after subtracting hours
    milliseconds = milliseconds % millisecondsInHour;

    // Calculate minutes
    const minutes = Math.floor(milliseconds / millisecondsInMinute);
    // Calculate remaining milliseconds after subtracting minutes
    milliseconds = milliseconds % millisecondsInMinute;

    // Calculate seconds
    const seconds = Math.floor(milliseconds / millisecondsInSecond);

    return `${hours}h ${minutes}m ${seconds}s`
}
export default millisecondToSecondMinuteHour