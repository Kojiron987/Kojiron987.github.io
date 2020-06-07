function main() {
    const canvas = document.querySelector('#glCanvas');
    // initialize gl context
    const gl = canvas.getContext('webgl');

    if (gl === null) {
        alert('WebGLに対応していないブラウザになっています')
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload =  main;