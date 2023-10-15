1. Function to display log in or log out. This is in Reac. Check the following site for explanation.

https://scrimba.com/scrim/cewRpUQ?pl=p7P5Hd

this.state = {
            isLoggedIn: false
        }

     let wordDisplay
        if (this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}






2. Time of the day in React

https://scrimba.com/scrim/c6G36SV?pl=p7P5Hd
https://scrimba.com/scrim/cbyv9hb?pl=p7P5Hd


function App() {
  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

