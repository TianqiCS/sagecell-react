# sagecell-react
A react wrapper of embedded sagecell

## Usage
```
import SageCell from 'sagecell-react';

ReactDOM.render(<SageCell script={codes} />, mountNode);
```
Or
```
ReactDOM.render(<SageCell>{codes}</SageCell>, mountNode);
```

## Props
- children: Initial codes, **will not** be changed inside of the cell when its value mutates.
- script: Initial codes, **will** be changed when this prop changes. **Has a higher priority than children**
- id: ID of the cell, will be generated randomly without given.
- src: The SageCell server to connect, it will use the default server if not given. https://sagecell.sagemath.org/static/embedded_sagecell.js
- language: The language of the cell, allowing all possible languages if not given.
- params: Raw parameters passed to the sagecell, see https://github.com/sagemath/sagecell/blob/master/doc/embedding.rst for more information.
- onChange: callback function when the editor is changed, for example `(codes) => {console.log(codes)}`
- getCellInfoReference: callback function when the sagecell is created, containing cell info object, which handled by embedded sagecell script. For example:
```
(cellInfo) => {
    console.log(cellInfo.session.rawcode); // codes has been evaluated
    console.log(cellInfo.session.output_block.innerText) // output of the evaluation
  }
```
- style: style to be used on sagecell-react div
