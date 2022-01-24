
const React = require('react')
const Wrapper = require('../wrapper')

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