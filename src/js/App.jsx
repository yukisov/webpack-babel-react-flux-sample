import React from 'react';
import ReactIntl from 'react-intl';
import * as ReactIntlSample from './ReactIntlSample';
import Hello from './Hello';

let ReactIntlSampleComponent = ReactIntlSample.Component,
    ReactIntlSampleIntlData = ReactIntlSample.intlData;

//        <Foo {...intlData}/>
//        <Foo locales="ja-JP" messages={{"breads": 'Hello, Photos!'}}/>
var App = React.createClass({
  render(){
    return (
      <div>
        <Hello/>
        <ReactIntlSampleComponent {...ReactIntlSampleIntlData}/>
        <div>Bar</div>
      </div>
    );
  }
});
module.exports = App;
