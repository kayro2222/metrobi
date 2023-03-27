"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function App() {
    const canvasRef = (0, react_1.useRef)(null);
    const [achillesPos, setAchillesPos] = (0, react_1.useState)(0);
    const [tortoisePos, setTortoisePos] = (0, react_1.useState)(500);
    (0, react_1.useEffect)(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        let achillesSpeed = 200;
        let tortoiseSpeed = achillesSpeed / 10;
        let startTime = null;
        let previousTime = null;
        let elapsedTime = 0;
        function animate(timestamp) {
            if (startTime === null) {
                startTime = timestamp;
            }
            if (previousTime !== null) {
                elapsedTime += timestamp - previousTime;
            }
            previousTime = timestamp;
            let achillesDistance = achillesSpeed * elapsedTime / 1000;
            let tortoiseDistance = tortoiseSpeed * elapsedTime / 1000;
            let newAchillesPos = achillesPos + achillesDistance;
            if (newAchillesPos < tortoisePos) {
                setAchillesPos(newAchillesPos);
            }
            else {
                setAchillesPos(tortoisePos);
            }
            let newTortoisePos = tortoisePos + tortoiseDistance;
            setTortoisePos(newTortoisePos);
            if (ctx) {
                if (canvas) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
                ctx.beginPath();
                ctx.moveTo(0, 50);
                ctx.lineTo(achillesPos, 50);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(achillesPos, 50);
                ctx.lineTo(tortoisePos, 250);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(achillesPos, 50, 10, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(tortoisePos, 250, 10, 0, 2 * Math.PI);
                ctx.fill();
                if (achillesPos < tortoisePos) {
                    return requestAnimationFrame(animate);
                }
            }
        }
        const animationId = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [achillesPos, tortoisePos]);
    return (<div>
      <canvas ref={canvasRef} width={800} height={500}/>
    </div>);
}
exports.default = App;
