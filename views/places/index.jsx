
const React = require('react')
const Wrapper = require('../wrapper')
const https = require('https')

// import trash from '../../images/trash.png'

function places (placesData) {

   
    return (
        <Wrapper>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                {
                    placesData.places.map((place, index) => {
                    return (
                        <div className="col-sm-4">
                        <h2>
                            <a href={`/places/${index}`} >
                            {place.name}
                            </a>
                        </h2>
                        <p className="cuisines">
                            {place.cuisines}
                        </p>
                        <img src={place.pic} alt={place.name} />
                        <p className="text-center">
                            Located in {place.city}, {place.state}
                        </p>
                        <form method="DELETE" action={`/places/${place.id}`}>
                            <input className="btn btn-primary" type="submit" value="DELETE" />
                        </form>
                            {/* <button>
                            <img style={{width: 25, height: 25}} src={"https://www.freeiconspng.com/uploads/garbage-bin-png-8.png"} alt="Delete" onClick={() => {deletePlace(place.id)}} />
                            </button> */}
                        </div>
                    )
                    })
                }
                </div>
            </main>
        </Wrapper>
    )
}

module.exports = places