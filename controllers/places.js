const router = require('express').Router()
const places = require("../models/places_model")
router.get('/', (req, res) => {
    res.render("places/index", {places})
})

router.get('/new', (req, res) => {
    res.render("places/new")
})

router.post('/', (req, res) => {
    let name = req.body.name
    let pic = req.body.pic
    let city = req.body.city
    let state = req.body.state
    let cuisines = req.body.cuisines

    if (name.length > 0 && pic.length > 0 && city.length > 0 && state.length > 0 && cuisines.length > 0){
        res.render("places/index", {places: [...places, {'name': name, 'pic': pic, 'city': city, 'state': state, 'cuisines': cuisines}]})
    }
    else {
        res.render("places/new", {error: "Not all fields are filled in"})
    }
})

router.get('/:id', (req, res) => {
    res.send('GET /:id')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET /:id/edit')
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id')
})
router.post('/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant')
})
router.delete('/:id/rant/:id', (req, res) => {
    res.send('DELETE /places/:id/rant:id')
})


module.exports = router







