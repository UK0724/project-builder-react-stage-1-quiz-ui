
import React from 'react';
import './home.css'
class Change extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            question:'Which is the only mammal that can jump?',
            optionA:'Dog',
            optionB:'Goat',
            optionC:'Elephant',
            optionD:'Lion'
         }
    }
    render() { 
        return ( 
            <>
            <div className="quiz">
                <h1>Question</h1>
                <div className='question'>
                    <div className='one'>0 of 12</div>
                    <div className='two'>{this.state.question}</div>
                 </div>
                 <div className="option">
                     <div>{this.state.optionA}</div>
                     <div>{this.state.optionB}</div>
                     <div>{this.state.optionC}</div>
                     <div>{this.state.optionC}</div>
                 </div>
                 <br/><br/>
                 <div className='button'>
                     
             <div className='colour'><button className="prev">Previous</button></div>
             <div className='colour'><button className="next">Next</button></div>
             <div className='colour'><button className="sub">Submit</button></div>
             </div>
             </div>
            </>
         );
    }
}
 
export default Change;