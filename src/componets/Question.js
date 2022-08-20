


export default function Question({ que }) {
    let numb = 0;
    return (
        <div key={que.number} className='w3-card-4 w3-padding w3-margin'>
            <label className="w3-serif w3-large">{que.number}.{que.text}</label>
            {
                que.responses.map(response => {
                    numb += 1;
                    return (
                        <div key={que.number+numb}>  
                            <span className="w3-monospace w3-text-grey">{response}</span>&nbsp;&nbsp;&nbsp;<input type="radio" name={que.number} value={numb} required/>
                        </div>
                    )
                })
            }
        </div>
    )
}