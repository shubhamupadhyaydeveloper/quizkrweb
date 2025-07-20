import React from 'react'

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Quizkr</h1>
            <h3>A platform for creating and playing quizzes</h3>
            <button onClick={() => {
                window.open(
                    "https://play.google.com/store/apps/details?id=com.shubham_upadhyay.Quizkr",
                    "_blank"
                )
            }}>Navigate to the app</button>
        </div>
    )
}

export default HomePage;