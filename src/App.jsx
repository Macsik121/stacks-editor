class App extends React.Component {
    render() {
        const theListOfUIwebTech = ['meArn', 'MEAN', 'MEVN', 'lamp'];

        function descriptionOfWEBstack(element, i) {
            const renderedElements = [];            
            for(let i = 0; i < element.length; i++) {
                if (element[i] == 'M' || element[i] == 'm') {
                    renderedElements.push(<li>MongoDB</li>);
                } else if (element[i] == 'E' || element[i] == 'e') {
                    renderedElements.push(<li>Express</li>);
                } else if (element[i] == 'E' || element[i] == 'e') {
                    renderedElements.push(<li>Express</li>);
                } else if (element[i] == 'R' || element[i] == 'r') {
                    renderedElements.push(<li>React</li>);
                } else if (element[i] == 'A' || element[i] == 'a') {
                    renderedElements.push(<li>Angular</li>);
                } else if (element[i] == 'V' || element[i] == 'v') {
                    renderedElements.push(<li>Vue</li>);
                } else if (element[i] == 'E' || element[i] == 'e') {
                    renderedElements.push(<li>Express</li>);
                } else if (element[i] == 'N' || element[i] == 'n') {
                    renderedElements.push(<li>Node.js</li>);
                } else if (element[i] == 'L' || element[i] == 'l') {
                    renderedElements.push(<li>Linux</li>);
                } else if (element[i] == 'P' || element[i] == 'p') {
                    renderedElements.push(<li>PHP</li>);
                }
            }
            renderedElements.map(e => <li>{e}</li>)
            return renderedElements;
        }

        // handleKeyDown(e) {
        //     if (e.key == 'Enter') {
        //         console.log('Something from Handle key down function');
        //     }
        // }

        return (
            <div className="wrapping">
                <h2 className="list_title">The listing of Web UI techniques</h2>
                <ul>
                    {
                        theListOfUIwebTech.map((element, i) => {
                            return (
                                <li className="framework" key={i}>
                                    <span className="listingNumber">{++i}.</span>
                                    <h3 className="web_title">{element}</h3>
                                    <div className="description">
                                        <ul className="desc_list">
                                            {descriptionOfWEBstack(element)}
                                        </ul>
                                    </div>
                                    {/* <div className="correct_the_stack">
                                        <span className="correct_message">Is something wrong? Please, correct it with the input below</span>
                                        <input onKeyDown={this.handleKeyDown} className="correcting" />
                                    </div> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);