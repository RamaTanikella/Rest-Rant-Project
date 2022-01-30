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
        places.push({'name': name, 'pic': pic, 'city': city, 'state': state, 'cuisines': cuisines})
        res.redirect("/places")
    }
    else {
        res.render("places/new", {error: "Not all fields are filled in"})
    }
})

router.get("/:index", (req, res) => {
    if(places[req.params.index]){
        res.render("places/viewplace", {place: places[req.params.index], index: req.params.index})
    }
    else {
        res.render("error")
    }
})

router.get("/:index/edit", (req, res) => {
    let index = req.params.index
    if(places[index] ){
        res.render("places/edit", {place: places[index], index: index})
    }
    else {
        res.render("error")
    }
})
router.put("/:index", (req, res) => {
    let index = req.params.index

    if(places[index] && req.body){
        places[index] = req.body
        res.redirect(`/places/${index}`)
    }
    else {
        res.render("error")
    }
})


router.delete("/:index", (req, res) => {
    let index = req.params.index

    if(places[index] && req.body){
        //remove one element starting at the index
        places.splice(index,1)
        res.redirect(`/places`)
    }
    else {
        res.render("error")
    }
})
router.post('/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant')
})
router.delete('/:id/rant/:id', (req, res) => {
    res.send('DELETE /places/:id/rant:id')
})


module.exports = router







