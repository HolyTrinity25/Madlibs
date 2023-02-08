import React, { useState } from "react";
import MadlibForm from "./MadlibForms";
import Story from "./Story";

const Madlib = () => {
    
    const [storyMade, setStoryMade] = useState(false)
    const [story, setStory] = useState()
    
    const createStory = (formData) => {
        const {noun, adjective, color, noun2} = formData
        
        
        setStory(`the nice ${noun} had a well ${adjective} that showed a light ${color} and never dark ${noun2}`)
            
        setStoryMade(storyMade => (
            !storyMade
        ))

    }

    const resetStory = () => {
        setStoryMade(storyMade => (
            !storyMade
        ))
        setStory("")
    }

    return (
        <>
        <h1>Madlibs!</h1>
       
        {storyMade === false ?
        <MadlibForm createStory={createStory} />
        :
        <Story story={story} reset={resetStory} />
}
        </>

    )

}

export default Madlib