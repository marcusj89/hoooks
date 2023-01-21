



function useMouse(initvalue) {

    const [mouse, setMouse] = useState(initvalue);
  
    function handleMouseMOve(e) {
       console.log(e)
       setMouse({x: e.clientX, y: e.clientY);
    }
                
    return {
      mouse,
      onMouseMove: handleMouseMove
    }
}
