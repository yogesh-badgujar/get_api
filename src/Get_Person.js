import React from 'react';
import axios from 'axios';

import _ from 'lodash';
export default class GetPerson extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            persons: []
        }
    }

    componentDidMount() 
    {
        
        axios.get(`https://www.zomato.com/webapi/searchapi.php?city=38`)
            .then(res => {
                const persons = res.data;
                console.log(res);

                const result = Object.values(res);
                console.log(result);

                console.log(persons)
                console.log({persons})

                this.setState({ persons:persons });
            })
            .catch(error=>{
                console.log(error);
              })
    }

    render() {
        const data=_.get(this.state.persons,"results.restaurants",[]);
        console.log(this.state.persons)
        var hashmap;
        return (
            
           data.map( item => {
            return(
                <>
                <div> Text{item.text} </div>
                <div> Description{item.description} </div>
                <div> Image<img src={item.image_url} /> </div>
                </>
            )
           })
        )
    }
}