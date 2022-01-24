
const React = require('react')
const Wrapper = require('./wrapper')

function home () {
    return (
        <Wrapper>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="https://jcfamilies.com/wp-content/uploads/2019/12/FCAD208A-2D3D-49E2-9966-7B32EDF865A0.png" alt="Chia Fruit Shake" />
                    <p>
                        <a href="https://jcfamilies.com/wp-content/uploads/2019/12/FCAD208A-2D3D-49E2-9966-7B32EDF865A0.png">Credits</a>
                    </p>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Wrapper>
    )
}

module.exports = home