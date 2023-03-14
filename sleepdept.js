const getSleepHours = day => {
    if (day === 'Monday') {
      return 8
    } else if (day === 'Tuesday') {
      return 8
    } else if(day === 'Wednesday') {
      return 6
    } else if(day === 'Thursday') {
      return 8
    } else if(day === 'Friday') {
      return 12
    } else if(day === 'Saturday') {
      return 10
    } else if(day === 'Sunday') {
      return 6
    } else {
      return 'Invalid input'
    }
  }
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
  
  const getIdealSleepHours = () => {
    const idealHours = 9
    return idealHours * 7
  }
  
  const calculateSleepDept = () => {
    const actualSleepHours = getIdealSleepHours()
    const idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours) {
      return 'You got the perfect amount of sleep.'
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) to reach ideal sleep hours. Great job!');
    } else if (actualSleepHours > idealSleepHours){
      return 'You got more sleep than needed.'
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week. Nice.');
    } else if (actualSleepHours < idealSleepHours){
      return 'You should get some rest.'
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    } else {
      return 'Please re-enter your sleep hours.'
    }
  }
  console.log(calculateSleepDept())  