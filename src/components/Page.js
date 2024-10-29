import logo from '../logo.svg'

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src={logo} alt='menaingful stuff' width="100px"></img>
                    <h1>Reasons i'm excited to learn about React</h1>
                    <ol>
                        <li>It's a popular library, so I'll be
                            able to fit in with the cool kids!</li>
                        <li>I'm more likely to get a job as a developer
                            if I know React</li>
                    </ol>
                </nav>
            </header>
            <footer>
                <div>
                    <small>@ 20xx Ochirkhuyag development. All rights reserved</small>
                </div>
            </footer>
        </div>

    )
}

export default Page