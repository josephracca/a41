//#FOR FUTURE PROJECTS
//this will return an object at a random index 

const Randomize = (incoming) => {
    return incoming[Math.floor(Math.random() * incoming.length)]
}

export default Randomize;