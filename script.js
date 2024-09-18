function solveQuadratic() {
    // Get values from inputs
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Calculate the discriminant
    const discriminant = b * b - 4 * a * c;
    const vertexX = -b / (2 * a);
    const vertexY = -discriminant / (4 * a);
    const yIntercept = c;

    let result = '';

    // Complete the square
    const h = vertexX;
    const k = vertexY;
    const completedSquareForm = `${a}(x - ${h.toFixed(2)})² + ${k.toFixed(2)}`;

    if (discriminant > 0) {
        // Two real and distinct roots
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `Discriminant: ${discriminant}\nVertex: (${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})\nY-Intercept: ${yIntercept.toFixed(2)}\nRoots: x1 = ${root1.toFixed(2)}, x2 = ${root2.toFixed(2)}\nCompleted Square Form: ${completedSquareForm}`;
    } else if (discriminant === 0) {
        // One real root
        const root = -b / (2 * a);
        result = `Discriminant: ${discriminant}\nVertex: (${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})\nY-Intercept: ${yIntercept.toFixed(2)}\nRoot: x = ${root.toFixed(2)}\nCompleted Square Form: ${completedSquareForm}`;
    } else {
        // No real roots
        result = `Discriminant: ${discriminant}\nVertex: (${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})\nY-Intercept: ${yIntercept.toFixed(2)}\nThe equation has no real roots.\nCompleted Square Form: ${completedSquareForm}`;
    }

    // Display the result
    document.getElementById('result').innerText = result;

    // Draw the graph
    drawGraph(a, b, c);
}

function drawGraph(a, b, c) {
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Set up the scale and origin
    const scale = 20; // scale for pixels per unit
    const originX = width / 2;
    const originY = height / 2;
    ctx.strokeStyle = '#0f0';
    ctx.lineWidth = 2;

    // Draw x and y axis
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // Draw the quadratic function
    ctx.beginPath();
    ctx.moveTo(0, height - (a * 0 * 0 * scale + b * 0 * scale + c) * scale);
    for (let x = -width / (2 * scale); x <= width / (2 * scale); x += 0.1) {
        const y = a * x * x + b * x + c;
        ctx.lineTo(originX + x * scale, originY - y * scale);
    }
    ctx.stroke();
}

