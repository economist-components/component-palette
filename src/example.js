import React from 'react';

const colors = [
  [ 'economist', '#E3120b' ],
  [ 'beijing', '#121212' ],
  [ 'kiev', '#383E42' ],
  [ 'moscow', '#7A7A7A' ],
  [ 'london', '#B6B6B6' ],
  [ 'cardiff', '#D7D7D7' ],
  [ 'berlin', '#F2F2F2' ],
  [ 'thimphu', '#FFFFFF' ],
  [ 'honolulu', '#16C9B3' ],
  [ 'dakar', '#0D6380' ],
  [ 'boston', '#C5CBE9' ],
  [ 'chicago', '#3E51B5' ],
];
function colorBox(color) {
  const bgStyle = { background: color };
  const fgStyle = { color, textShadow: '1px 1px 0 gray' };
  return (<span>
    <div className="palette__inline-color-block" style={bgStyle}></div>
    <span style={fgStyle}>{color}</span>
  </span>);
}
const colorSamples = colors.map(([ name, color ]) => (
  <tr className="palette__color-sample" key={`${ name }--${ color }`}>
    <td>
      <code className="color-name">{name}</code>
    </td>
    <td>
      {colorBox(color)}
    </td>
  </tr>
));
export default (
  <table>
    <tbody>
      {colorSamples}
    </tbody>
  </table>
);
