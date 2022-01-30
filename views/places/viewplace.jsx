const React = require('react')
const Wrapper = require('../wrapper')

function viewplace (place) {
    return (
        <Wrapper>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img src={place.place.pic} alt={place.place.name} />
                <h3>
                  Located in {place.place.city}, {place.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
                <h1>{ place.place.name }</h1>
                
                <br />
                <h2>
                  Description
                </h2>
                
                <h4>
                  Serving {place.place.cuisines}
                </h4>
                <br />
                <a href={`/places/${place.index}/edit`} className="btn btn-warning">
                  Edit
                </a>{'\n'}
                <form method="POST" action={`/places/${place.index}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
              </div>
            </div>
            <hr />
            
            
          </main>
        </Wrapper>
    )
}

module.exports = viewplace