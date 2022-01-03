import React from 'react'
import Book from './Book'

const bookList = [
    {title: 'First'},
    {title: 'Second'},
    {title: 'Third'}
]
export default function Books(){

    const [showBook, setState] = React.useState(false);

    function viewBook(){
        setState(prev => true);
    }

    return(
        <div>
            {showBook && <Book title="First123" />}
            <button onClick = {viewBook}>View</button>
        </div>

    )
}


