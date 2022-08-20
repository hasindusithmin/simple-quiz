

export default function Result({result}){

    return (
        <table className="w3-table-all">
            <tr>
                <th>Question</th><th>Status</th>
            </tr>
            {
                result.map(r=><tr><td>{r.question}</td><td className={r.correct?'w3-text-blue':'w3-text-red'}>{r.correct?'correct':'wrong'}</td></tr>)
            }
        </table>
    )
}
