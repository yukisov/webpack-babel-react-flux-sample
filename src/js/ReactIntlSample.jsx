import React from 'react';
import ReactIntl from 'react-intl';

// React-Intl
let IntlMixin       = ReactIntl.IntlMixin,
    FormattedNumber = ReactIntl.FormattedNumber,
    FormattedDate = ReactIntl.FormattedDate,
    FormattedRelative = ReactIntl.FormattedRelative,
    FormattedMessage = ReactIntl.FormattedMessage,
    intlData = {
        "locales": "ja-JP",
        //"locales": "ja",
        "formats": {
          "date": {
            "short": {
              "day": "numeric",
              "month": "long",
              "year": "numeric"
            }
          }
        },
        "messages": {
            "breads": `{name}は{takenDate, date, long}に
                       {numBreads, plural,
                         =0 {1個もパンを食べませんでした。}
                         =1 {1個パンを食べました。}
                         other {#個パンを食べました。}
                       }`,
            "app": {
              "bar": "Hello, {name}!"
            }
        }
    };

//require('../../node_modules/react-intl/dist/locale-data/ja.js');
ReactIntl.__addLocaleData({"locale":"ja","pluralRuleFunction":function (n,ord){if(ord)return"other";return"other"},"fields":{"year":{"displayName":"年","relative":{"0":"今年","1":"翌年","-1":"昨年"},"relativeTime":{"future":{"other":"{0} 年後"},"past":{"other":"{0} 年前"}}},"month":{"displayName":"月","relative":{"0":"今月","1":"翌月","-1":"先月"},"relativeTime":{"future":{"other":"{0} か月後"},"past":{"other":"{0} か月前"}}},"day":{"displayName":"日","relative":{"0":"今日","1":"明日","2":"明後日","-1":"昨日","-2":"一昨日"},"relativeTime":{"future":{"other":"{0} 日後"},"past":{"other":"{0} 日前"}}},"hour":{"displayName":"時","relativeTime":{"future":{"other":"{0} 時間後"},"past":{"other":"{0} 時間前"}}},"minute":{"displayName":"分","relativeTime":{"future":{"other":"{0} 分後"},"past":{"other":"{0} 分前"}}},"second":{"displayName":"秒","relative":{"0":"今すぐ"},"relativeTime":{"future":{"other":"{0} 秒後"},"past":{"other":"{0} 秒前"}}}}});
ReactIntl.__addLocaleData({"locale":"ja-JP","parentLocale":"ja"});

let Bar = React.createClass({
    mixins: [IntlMixin],

    render() {
        return (
          <FormattedMessage
              message={this.getIntlMessage('app.bar')}
              name="二郎"/>
        );
    }
});

var ReactIntlSample = React.createClass({
    mixins: [IntlMixin],

    render() {
        var commentDate = Date.now() - (1000 * 60 * 60 * 2);
        return (
          <ul>
            <li><FormattedNumber
                    value={2000}
                    style="currency"
                    currency="JPY" /></li>
            <li><FormattedMessage
                    message={this.getIntlMessage('breads')}
                    name="太郎"
                    numBreads={3}
                    takenDate={Date.now()} /></li>
            <li><Bar/></li>
            <li><FormattedDate value={new Date()} format="short" /></li>
            <li><FormattedRelative value={commentDate} /></li>
          </ul>
        );
    }
});



module.exports = {
  Component: ReactIntlSample,
  intlData
};
