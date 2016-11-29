"use strict";

var females = BABYNAMES.filter(record =>  "F" == record.sex);
var topFemNames = females.sort((rec1,rec2) => rec2.count - rec1.count).slice(0,100);

//main application React component
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var columnMeta = {
            count: {
                type: columnTypes.numeric,
                caption: "Num of Babies"
            }
        }
        return (
            <div className="container">
                <h1>Most Popular Female Baby Names from 1996</h1>
                
                <DataTable record = {this.props.records} 
                    columnMeta={columnMeta} />
            </div>
        );
    }
}

//render the App component to the element with id="app"
ReactDOM.render(<App records={topFemNames}/>, document.getElementById("app"));
