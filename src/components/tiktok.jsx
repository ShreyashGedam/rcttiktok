
import { useState } from "react"
import "./tiktok.css"

export const Tiktok = () =>
{
    

    const [turn , setTurn] = useState("x")
    const [cells , setCells] = useState(Array(9).fill(""))
    const [winner , setWinner] = useState() 

    const checkwinner = () =>
    {
        var combos = {
            across : [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down : [
                [0,3,6],
                [1,4,5],
                [6,7,8]
            ],
            diagonal : [
                [0,4,8],
                [2,4,6]
            ]
        }

        for( var combo in combos ){
            combos[combo].forEach( (p) =>
            { if(
                squares[p[0]] === "" ||
                squares[p[1]] === "" ||
                squares[p[2]] === ""
            ){}
            else if(
                squares[p[0]] === squares[p[1]] &&
                squares[p[0]] === squares[p[1]]
            )
            {
                setWinner( squares[p[0]] )
            }
            } )
        }
    }

    const handleclick = (num) =>
    {

        if(cells[num] !== "")
        {
            alert("Already clecked")
            return
        }

        const squares = [...cells]
        console.log(num)
        if(turn === "x")
        {
            squares[num] = "x"
            setTurn("o")
        }
        else{
            squares[num] = "o"
            setTurn("x")
        }

        setCells(squares)
        console.log(squares)
    }

    const Cell = ({num}) =>
    {
        return <div onClick={ () => handleclick(num)}>{cells[num]}</div>
    }
    
    return (
        <div className="container">
            <div>Turn : {turn} </div>
            <div className="boxes">
            <Cell num={0}></Cell>
            <Cell num={1}></Cell>
            <Cell num={2}></Cell>
            <Cell num={3}></Cell>
            <Cell num={4}></Cell>
            <Cell num={5}></Cell>
            <Cell num={6}></Cell>
            <Cell num={7}></Cell>
            <Cell num={8}></Cell>  
            </div>    
            {winner && ( <p> {winner} is the winner </p> )}
        </div>
        
    )
}