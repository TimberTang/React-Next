import { useState } from "react"

function Timber() {
    const [color, setColor] = useState('blue')
    function changeColor() {
      setColor(color === 'blue' ? 'red': 'blue')
    }
    return (
      <>
        <div>TimberTang前端</div>
        <button onClick={changeColor}>改变颜色</button>
        <style jsx>
            {`
              div{color: ${color};}
              .timber{color: red}
            `}
        </style>
      </>
    )
}

export default Timber