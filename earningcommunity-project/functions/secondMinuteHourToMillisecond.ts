function secondMinuteHourToMillisecond(hours:string, minutes:string, seconds:string) {
    const millisecondsInHour = 60 * 60 * 1000; // 1 hour = 60 minutes * 60 seconds * 1000 milliseconds
    const millisecondsInMinute = 60 * 1000; // 1 minute = 60 seconds * 1000 milliseconds
    const millisecondsInSecond = 1000; // 1 second = 1000 milliseconds
    
    const totalMilliseconds = parseInt(hours) * millisecondsInHour + parseInt(minutes) * millisecondsInMinute + parseInt(seconds) * millisecondsInSecond;
    
    return totalMilliseconds;
}
export default secondMinuteHourToMillisecond