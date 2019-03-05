var csjs = require('csjs-inject')

var css = csjs`
  .contextview            {
      opacity           : 0.8;
    }
  .container              {
    padding             : 1px 15px;
  }
  .line                   {
    display             : flex;
    justify-content     : flex-end;
    align-items         : center;
    text-overflow       : ellipsis;
    overflow            : hidden;
    white-space         : nowrap;
    font-size           : 11px;
  }
  .type                   {
    font-style        : italic;
    margin-right      : 5px;
  }
  .name                   {
    font-weight       : bold;
  }
  .jump                   {
    cursor            : pointer;
    margin            : 0 5px;
  }
  .jump:hover              {
    color             : var(--secondary);
  }
  .referencesnb           {
    float             : right;
    margin-left       : 15px;
  }
  .gasEstimation {
    margin-left: 15px;
    display: flex;
    align-items: center;
  }
  .gasStationIcon {
    height: 13px;
    margin-right: 5px;
  }
`

module.exports = css
