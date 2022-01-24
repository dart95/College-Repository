var Example;
(function (Example) {
    class Paint {
        constructor(target, width, height) {
            let found = target.querySelector("canvas");
            if (found) {
                this._canvas = found;
            }
            else {
                this._canvas = document.createElement("canvas");
            }
            this._canvas.width = width || 500;
            this._canvas.height = height || 500;
            this._canvasContext2D = this._canvas.getContext("2d");
            this._canvasContext2D.fillStyle = "#fff";
            target.appendChild(this._canvas);
        }
        drawByPazzle(image, rows, columns, indent) {
            this._canvasContext2D.clearRect(0, 0, this._canvas.width, this._canvas.height);
            rows = rows || 2;
            columns = columns || 2;
            indent = indent || 30;
            let img = new Image(this._canvas.width, this._canvas.height);
            if (typeof image === "string") {
                img.src = image;
            }
            else {
                img.src = URL.createObjectURL(new Blob([image], { type: image.type }));
            }
            let sliceWidth = (this._canvas.width - (indent * (columns - 1))) / columns;
            let sliceHeight = (this._canvas.height - (indent * (rows - 1))) / rows;
            img.onload = (e) => {
                let imgSliceWidth = img.naturalWidth / columns;
                let imgSliceHeight = img.naturalHeight / rows;
                for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
                    for (let colIndex = 0; colIndex < columns; colIndex++) {
                        this._canvasContext2D.drawImage(img, colIndex * imgSliceWidth, rowIndex * imgSliceHeight, imgSliceWidth, imgSliceHeight, colIndex * (indent + sliceWidth), rowIndex * (indent + sliceHeight), sliceWidth, sliceHeight);
                    }
                }
            };
        }
    }
    Example.Paint = Paint;
    class Do {
        static Work() {
            let imagePicker = document.querySelector("#pic");
            let inputRows = document.querySelector("#rows");
            let inputColumns = document.querySelector("#columns");
            let inputIndent = document.querySelector("#indent");
            let paint = new Example.Paint(document.querySelector(".work-zone") || document.body, 1000, 800);
            imagePicker.addEventListener("change", e => {
                paint.drawByPazzle(imagePicker.files[0], Number(inputRows.value), Number(inputColumns.value), Number(inputIndent.value));
            });
            inputRows.addEventListener("change", e => {
                if (imagePicker.files.length > 0) {
                    paint.drawByPazzle(imagePicker.files[0], Number(inputRows.value), Number(inputColumns.value), Number(inputIndent.value));
                }
            });
            inputColumns.addEventListener("change", e => {
                if (imagePicker.files.length > 0) {
                    paint.drawByPazzle(imagePicker.files[0], Number(inputRows.value), Number(inputColumns.value), Number(inputIndent.value));
                }
            });
            inputIndent.addEventListener("change", e => {
                if (imagePicker.files.length > 0) {
                    paint.drawByPazzle(imagePicker.files[0], Number(inputRows.value), Number(inputColumns.value), Number(inputIndent.value));
                }
            });
        }
    }
    Example.Do = Do;
})(Example || (Example = {}));
Example.Do.Work();
