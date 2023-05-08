const notFound = (req,res) => res.status(404).send(`Path you are looking for does not exist, please try a correct path!!`)

module.exports = notFound