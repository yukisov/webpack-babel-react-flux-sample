import React from 'react';
import ReactIntl from 'react-intl';
import Hello from './Hello';

// React-Intl
var IntlMixin       = ReactIntl.IntlMixin,
    FormattedNumber = ReactIntl.FormattedNumber,
    FormattedMessage = ReactIntl.FormattedMessage,
    intlData = {
        "locales": "ja-JP",
        "messages": {
            "photos": "{name}は{takenDate, date, long}に{numPhotos, plural,\n  =0 {1枚も写真を撮りませんでした。}\n  =1 {1枚写真を撮りました。}\n  other {#枚写真を撮りました。}\n}\n"
        }
    };

var Price = React.createClass({
    mixins: [IntlMixin],

    render() {
        return (
            <p>
                <FormattedNumber value={2000} style="currency" currency="YEN" />
                <br/>
                <FormattedMessage
                    message={this.getIntlMessage('photos')}
                    name="太郎"
                    numPhotos={0}
                    takenDate={Date.now()} />
            </p>
        );
    }
});


var App = React.createClass({
  render(){
    return (
      <div>
        <Hello/>
        <Price {...intlData}/>
        <div>Bar</div>
      </div>
    );
  }
});
module.exports = App;
